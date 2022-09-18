import {
  blogDeployStateQuery,
  storybookDeployStateQuery,
  DeployState,
  Project,
} from "../src-client/github";
import { github } from "../src-core/request/github";

const getQuery = (project: Project) => {
  switch (project) {
    case "blog": {
      return blogDeployStateQuery;
    }
    case "storybook": {
      return storybookDeployStateQuery;
    }
  }
};

export const fetchDeployState = async ({
  owner,
  repo,
  project,
}: {
  owner: string;
  repo: string;
  project: Project;
}): Promise<keyof typeof DeployState> => {
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
