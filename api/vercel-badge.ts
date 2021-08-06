import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

import { fetchState } from "../server/fetchers/state-fetcher";
import { generateBadgeUrl } from "../utils/badge";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { query } = req;
  const { login, repo, project } = query as Record<string, string>;

  const state = await fetchState(login, repo, project);
  const badgeUrl = generateBadgeUrl(project, state.toLowerCase(), {
    color: "brightgreen",
    style: "flat",
    logo: "vercel",
  });
  const { data } = await axios.get(badgeUrl);

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(data);
};
