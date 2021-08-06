import { github } from "./client";

export enum DeployState {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
  FAILURE = "FAILURE",
}

export type IDeployState = keyof typeof DeployState;

const blogQuery = `
query getDeployments($login: String!, $repo: String!) {
  repository(owner: $login, name: $repo) {
    deployments(environments: "Production – blog", last: 1) {
      edges {
        node {
          environment
          state
          task
          commitOid
          createdAt
          id
          creator {
            login
          }
          latestStatus {
            state
          }
        }
      }
    }
  }
}`;

const storybookQuery = `
query getDeployments($login: String!, $repo: String!) {
  repository(owner: $login, name: $repo) {
    deployments(environments: "Production – storybook", last: 1) {
      edges {
        node {
          environment
          state
          task
          commitOid
          createdAt
          id
          creator {
            login
          }
          latestStatus {
            state
          }
        }
      }
    }
  }
}`;

const getQuery = (project: string) => {
  switch (project) {
    case "blog": {
      return blogQuery;
    }
    case "storybook": {
      return storybookQuery;
    }
  }
};

const fetcher = (variables: any, project: string) => {
  return github(
    {
      query: getQuery(project),
      variables,
    },
    {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
  );
};

export const fetchState = async (
  userName: string,
  repoName: string,
  project: string,
): Promise<IDeployState> => {
  const res = await fetcher(
    {
      login: userName,
      repo: repoName,
    },
    project,
  );

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
