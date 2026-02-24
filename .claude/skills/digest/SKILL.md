---
name: digest
description: Collect tech articles from multiple sources and generate bilingual digest entries
allowed-tools: ["Bash", "Read", "Write", "Edit", "Glob", "Grep", "WebFetch", "WebSearch"]
---

# Collect Digest Skill

Cast a wide net across RSS feeds, personal blogs, Twitter/X, GitHub Trending, GitHub Releases, and web search — then use AI quality filtering to curate only the most noteworthy articles into bilingual (EN/ZH) digest entries.

**Core principle: wide input, strict output.** Many sources feed in, but only 8–15 high-quality articles come out per run.

## Sources

Read `.claude/skills/digest/sources.json` to load all sources.

## Steps

### Phase 1: Collect candidates

1. **Load existing data.** Read all JSON files in `public/digests/` and collect every `url` (normalized) for deduplication.

2. **Fetch RSS feeds.** For each `rss` source, use WebFetch to retrieve the feed. Extract articles (up to the `maxItems` limit per source): title, link, publication date, and content snippet.

3. **Fetch personal blogs.** For each `blogs` source, use WebFetch to retrieve the feed (same as RSS). Extract articles up to `maxItems`. Set `source` to the author's name.

4. **Fetch Twitter/X highlights.** For each `twitter` entry, use WebSearch with `"{name}" {current_month_year}` to find recent noteworthy posts, threads, or announcements. Only include original technical insights — skip retweets, casual posts, and content already captured by other sources. Use the tweet/thread URL as the article link. Set `source` to `"@{handle}"`. Max 2 items per account.

5. **Fetch GitHub Trending.** For each `githubTrending` entry, use WebFetch to scrape `https://github.com/trending/{language}?since={since}`. Extract repository name, description, star count, and today's star count (up to `maxItems`). Use the repository URL as the article link and set `source` to `"GitHub Trending"`.

6. **Fetch GitHub Releases.** For each repo in `githubReleases`, use Bash to run `gh release list --repo {repo} --limit 1 --json tagName,publishedAt,url,name` to get the latest release. Skip if the release is older than 7 days. Set `source` to `"GitHub Releases"`.

7. **Web Search.** For each `webSearch` entry, use WebSearch with the query (replace `{current_month}` with the actual current month, e.g. "February 2026"). Collect up to `maxItems` relevant results per query. Set `source` to `"Web Search"`.

8. **Deduplicate.** Normalize all URLs (strip protocol, `www.`, and trailing `/`). Skip any article whose normalized URL already exists in digest files or in this batch.

### Phase 2: AI quality filtering

9. **Curate.** Evaluate every candidate article and select **only the top 8–15 articles** for the final digest. Apply these criteria in order of priority:

   **Include (high signal):**
   - Major version releases of widely-used projects (React 20, Vite 7, not patch bumps)
   - Breakthrough AI research papers or model launches
   - New web platform features reaching Baseline or shipping in browsers
   - Original technical deep dives with novel insights
   - Significant open-source project launches or acquisitions

   **Exclude (noise):**
   - Minor/patch releases (v1.2.3 → v1.2.4) unless they fix critical security issues
   - Marketing blog posts dressed as technical content
   - Listicles and "top 10" roundups from aggregator sites
   - Content that duplicates something already covered by a higher-quality source
   - Tangentially related content (e.g., AI art on an AI blog, business news on a tech blog)

   **When in doubt:** Ask "would a senior frontend or AI engineer find this worth 2 minutes of reading?" If no, cut it.

### Phase 3: Generate and write

10. **Generate bilingual content.** For each selected article, generate:
    - `id`: short semantic slug describing the article content (e.g., `ggml-llama-cpp-join-huggingface`, `ollama-v0-17-0`). Use lowercase, hyphens only, max 60 chars
    - `title`: `{ en, zh }` — translate the original title
    - `summary`: `{ en, zh }` — 2-sentence summary per language

11. **Present for review.** Show the user a summary table of curated articles (title, source, date) and how many candidates were collected vs. selected. Ask for confirmation before writing.

12. **Write to files.** Append new items to the monthly JSON file (`public/digests/YYYY-MM.json`). Each item follows the `DigestItem` schema:

    ```json
    {
      "id": "semantic-slug",
      "title": { "en": "...", "zh": "..." },
      "url": "https://...",
      "source": "Source Name",
      "summary": { "en": "...", "zh": "..." },
      "date": "YYYY-MM-DD"
    }
    ```

    If the monthly file already exists, read it first and merge (append new items). Write with 2-space indentation and a trailing newline.

### Phase 4: Maintain sources

13. **Source health check.** After writing digest entries, evaluate source health and update `sources.json`:

    a. **Report health.** For each source, report items found vs. expected. Flag any source that returned errors or zero results.

    b. **Discover new sources.** Check collected articles for recurring domains or authors not yet tracked. If an untracked source produced 2+ quality articles (e.g., a blog that keeps surfacing via HN), suggest adding it.

    c. **Prune dead sources.** If an RSS/blog feed returned a fetch error (404, timeout, invalid XML), suggest removing or replacing it.

    d. **Audit existing entries.** Check whether article URLs already saved in `public/digests/*.json` are still reachable:

       1. For each `DigestItem` across all digest JSON files, use WebFetch to verify the URL is still live.
       2. Classify each result:
          - **Broken** (404, 5xx, timeout, DNS failure) → suggest removal from the digest file.
          - **Redirected** (301/302 to a different URL) → suggest updating the `url` field to the new location.
       3. Present a table of broken/redirected entries (file, id, old URL, status/new URL) to the user.
       4. After user confirmation, remove broken entries or update redirected URLs in the corresponding JSON files.

    e. **Apply updates.** Present all suggested source changes to the user. If approved, update `sources.json` directly.

## Rules

- Dedup by normalized URL, not by ID — same content from different sources counts as one entry
- IDs are short semantic slugs (`claude-sonnet-4-6`, not `https-www-anthropic-com-news-claude-sonnet-4-6`)
- Dates use `YYYY-MM-DD` format from the article's publication date; fall back to today if unavailable
- Summaries should be concise and informative (2 sentences each)
- Titles should be natural translations, not literal word-for-word
- Quality over quantity — 10 excellent articles beat 30 mediocre ones
- After writing, report: candidates collected / articles selected / articles written, and to which file(s)
