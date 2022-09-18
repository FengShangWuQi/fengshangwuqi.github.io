import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

import { DeployState, Project } from "src-client/github";
import { fetchDeployState } from "src-api/deploy-state-fetcher";
import { generateBadgeUrl } from "utils/badge";

type VercelBadgeQuery = {
  owner: string;
  repo: string;
  project: Project;
};

const getBadgeColor = (state: keyof typeof DeployState) => {
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
  const { owner, repo, project } = query as VercelBadgeQuery;

  const deployState = await fetchDeployState({ owner, repo, project });
  const badgeUrl = generateBadgeUrl({
    label: project,
    message: deployState.toLowerCase(),
    options: {
      color: getBadgeColor(deployState),
      logo: "vercel",
    },
  });
  const { data } = await axios.get(badgeUrl);

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(data);
};
