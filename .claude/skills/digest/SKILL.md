---
name: digest
description: Collect tech articles from multiple sources and generate bilingual digest entries
allowed-tools: ["Bash", "Read", "Write", "Edit", "Glob", "Grep", "WebFetch", "WebSearch"]
---

# Collect Digest Skill

Cast a wide net across RSS/Atom feeds, GitHub Trending, GitHub Releases, and web search — then use AI quality filtering to curate only the most noteworthy articles into bilingual (EN/ZH) digest entries.

**Core principle: wide input, strict output.** Many sources feed in, but only high-quality articles come out.

## Sources

Read `.claude/skills/digest/sources.json` to load all sources.

## Modes

- `/digest` — Collect and curate this week's articles (default).
- `/digest --audit` — Verify URLs in this week's digest entries.
- `/digest --source` — Maintain source quality in `sources.json`.

"This week" means Monday through Sunday of the current calendar week.

## Steps

### Phase 1: Collect candidates

1. **Load existing data.** Determine which monthly files the current week spans (usually one, at most two when a week crosses a month boundary). Read only those JSON files in `public/digests/` and collect every `url` (normalized) for deduplication.

2. **Fetch feeds.** For each `feeds` source, use WebFetch to retrieve the feed. Extract all articles published this week: title, link, publication date, and content snippet. If a feed entry has a `sourceLabel` field, use it as the article's `source`; otherwise use the feed's `name`.

3. **Fetch GitHub Trending.** For each `githubTrending` entry, use Bash to run `gh api search/repositories -X GET -f q="language:{language} created:>{monday_date}" -f sort=stars -f order=desc --jq '.items[] | {name: .full_name, description: .description, url: .html_url, stars: .stargazers_count}'` to find this week's popular repositories. Set `source` to `"GitHub Trending"`.

4. **Fetch GitHub Releases.** For each repo in `githubReleases`, use Bash to run `gh release list --repo {repo} --limit 1 --json tagName,publishedAt,url,name` to get the latest release. Skip if the release was published before this week. Set `source` to `"GitHub Releases"`.

5. **Web Search.** For each `webSearch` entry, use WebSearch with the query (replace `{current_month}` with the actual current month, e.g. "March 2026"). Collect relevant results per query. Set `source` to `"Web Search"`.

6. **Deduplicate.** Normalize all URLs (strip protocol, `www.`, and trailing `/`). Skip any article whose normalized URL already exists in digest files or in this batch.

### Phase 2: AI quality filtering

7. **Curate.** Evaluate every candidate article and select only those that meet the quality bar. Apply these criteria in order of priority:

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

   **Do not chase a target count.** If only 3 articles pass the bar, output 3. If none pass, output zero and report to the user.

### Phase 3: Generate and write

8. **Generate bilingual content.** For each selected article, generate:
    - `id`: short semantic slug describing the article content (e.g., `ggml-llama-cpp-join-huggingface`, `ollama-v0-17-0`). Use lowercase, hyphens only, max 60 chars
    - `title`: `{ en, zh }` — translate the original title
    - `summary`: `{ en, zh }` — 3–5 sentence summary per language that conveys the article's core content. Cover: what was announced/built/discovered, the key technical details or design decisions, and why it matters. A reader should understand the substance without clicking through

9. **Present for review.** Show the user a summary table of curated articles (title, source, date) and how many candidates were collected vs. selected. Ask for confirmation before writing.

10. **Write to files.** Append new items to the monthly JSON file (`public/digests/YYYY-MM.json`). Each item follows the `DigestItem` schema:

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

    Merge with data already loaded in Step 1 (append new items). Write with 2-space indentation and a trailing newline.

11. **Report.** After writing, report: candidates collected / articles selected / articles written, and to which file(s).

---

## Audit Mode

When invoked with `/digest --audit`, skip the main workflow and audit this week's digest entries in two passes: **link health** and **quality review**.

### Pass 1: Link Health

1. Determine the current week's date range (Monday–Sunday) and which monthly files it spans.
2. Read only those monthly JSON files in `public/digests/` and filter to entries whose `date` falls within this week.
3. For each matching `DigestItem`, use WebFetch to verify the URL is still live.
4. Classify each result:
   - **Broken** (404, 5xx, timeout, DNS failure) → suggest removal from the digest file.
   - **Redirected** (301/302 to a different URL) → suggest updating the `url` field to the new location.

### Pass 2: Quality Review

Using the page content already fetched in Pass 1, perform a second-pass quality review:

5. **Content–summary alignment.** For each article, compare the fetched page content against its `summary`. Flag entries where the summary is materially inaccurate, outdated (content changed since collection), or too vague to convey the article's substance.

6. **Quality bar re-check.** Re-apply the Phase 2 curation criteria to every entry. Flag articles that no longer meet the bar — e.g., a "major release" that turned out to be a patch, hype-driven announcements with no technical depth, or marketing content that slipped through.

7. **Topic diversity.** Group articles by topic. Flag if 3+ entries cover the same narrow subject — suggest keeping only the highest-quality source and dropping the rest.

8. **Source diversity.** Count articles per source. Flag if a single source accounts for more than 40% of the week's entries.

9. **Gap analysis.** Run a small set of WebSearch queries for the week's major tech news (e.g., "major tech releases {week_range}", "AI breakthroughs {week_range}"). Compare results against the current entries. Flag significant omissions — stories a senior engineer would expect to see but are missing.

### Report & Confirm

10. Present a combined audit report to the user with two sections:

    **Link issues** — table of broken/redirected entries (file, id, old URL, status/new URL).

    **Quality issues** — table of flagged entries grouped by issue type (content mismatch, below quality bar, topic overlap, source imbalance), each with a brief reason and suggested action (remove / rewrite summary / keep).

    **Potential gaps** — list of notable stories found in gap analysis that are not yet in the digest, each with title, URL, and why it matters.

11. After user confirmation, apply approved changes: remove entries, update URLs, rewrite summaries, or add new entries (following the same `DigestItem` schema and bilingual generation rules from Phase 3) in the corresponding JSON files.

---

## Sources Mode

When invoked with `/digest --source`, skip the main workflow and **only** maintain source quality:

1. **Check feeds.** For each `feeds` source, use WebFetch to attempt fetching the feed. Report items found. Flag any source that returned errors or zero results.
2. **Check GitHub Releases.** For each repo in `githubReleases`, use Bash to run `gh release list --repo {repo} --limit 1 --json tagName,publishedAt` to verify the repo exists and has recent activity. Flag any repo that returned errors or has had no release in the past 6 months.
3. **Discover new sources.** Check the most recent digest entries for recurring domains, authors, or GitHub repos not yet tracked. If an untracked source produced 2+ quality articles, suggest adding it to `sources.json` with `category` and `reason` fields.
4. **Prune dead sources.** If a feed returned a fetch error (404, timeout, invalid XML) or a GitHub repo no longer exists, suggest removing or replacing it.
5. Present all suggested source changes to the user. If approved, update `sources.json` directly.

---

## Rules

- Dedup by normalized URL, not by ID — same content from different sources counts as one entry
- IDs are short semantic slugs (`claude-sonnet-4-6`, not `https-www-anthropic-com-news-claude-sonnet-4-6`)
- Dates use `YYYY-MM-DD` format from the article's publication date; skip articles with no publication date
- Titles should be natural translations, not literal word-for-word
- Feeds with a `sourceLabel` field use that value as `source`; all others use the feed's `name`
