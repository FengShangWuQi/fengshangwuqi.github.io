import {
  blogDeployStateQuery,
  storybookDeployStateQuery,
  IDeployState,
} from "../client/github";
import { githubFetcher } from "./";

export type IProject = "blog" | "storybook";

const getQuery = (project: IProject) => {
  switch (project) {
    case "blog": {
      return blogDeployStateQuery;
    }
    case "storybook": {
      return storybookDeployStateQuery;
    }
  }
};

export const fetchState = async (
  userName: string,
  repoName: string,
  project: IProject,
): Promise<IDeployState> => {
  const res = await githubFetcher(getQuery(project), {
    login: userName,
    repo: repoName,
  });

  const {
    data: {
      data: {
        repository: {
          deployments: { edges },
        },
      },
    },
  } = res;
  const {
    node: {
      latestStatus: { state },
    },
  } = edges[0];

  return state;
};
