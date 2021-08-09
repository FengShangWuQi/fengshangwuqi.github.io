export enum DeployState {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
  FAILURE = "FAILURE",
}

export type IDeployState = keyof typeof DeployState;

export const blogDeployStateQuery = `
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

export const storybookDeployStateQuery = `
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
