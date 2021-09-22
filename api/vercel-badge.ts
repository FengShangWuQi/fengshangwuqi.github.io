import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

import { IDeployState, DeployState } from "../src-client/github";
import { fetchDeployState, IProject } from "../src-api/deploy-state-fetcher";
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
    case DeployState.INACTIVE: {
      return "lightgrey";
    }
  }
};

export default async (req: VercelRequest, res: VercelResponse) => {
  const { query } = req;
  const { owner, repo, project } = query as Record<string, string>;

  const deployState = await fetchDeployState(owner, repo, project as IProject);
  const badgeUrl = generateBadgeUrl(project, deployState.toLowerCase(), {
    color: getBadgeColor(deployState),
    logo: "vercel",
  });
  const { data } = await axios.get(badgeUrl);

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(data);
};
