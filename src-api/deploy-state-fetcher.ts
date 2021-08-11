import {
  blogDeployStateQuery,
  storybookDeployStateQuery,
  IDeployState,
} from "../src-client/github";
import { github } from "../src-core/request/github";

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

export const fetchDeployState = async (
  owner: string,
  repo: string,
  project: IProject,
): Promise<IDeployState> => {
  const res = await github.graphql(getQuery(project), {
    owner,
    repo,
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
