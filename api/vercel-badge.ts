import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

import {
  fetchState,
  IDeployState,
  DeployState,
} from "../server/fetchers/state-fetcher";
import { generateBadgeUrl } from "../utils/badge";

const getBadgeColor = (state: IDeployState) => {
  switch (state) {
    case DeployState.SUCCESS: {
      return "brightgreen";
    }
    case DeployState.PENDING: {
      return "yellow";
    }
    case DeployState.FAILURE: {
      return "red";
    }
  }
};

export default async (req: VercelRequest, res: VercelResponse) => {
  const { query } = req;
  const { login, repo, project } = query as Record<string, string>;

  const state = await fetchState(login, repo, project);
  const badgeUrl = generateBadgeUrl(project, state.toLowerCase(), {
    color: getBadgeColor(state),
    logo: "vercel",
  });
  const { data } = await axios.get(badgeUrl);

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(data);
};
