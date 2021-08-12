export enum DeployState {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
  FAILURE = "FAILURE",
}

export type IDeployState = keyof typeof DeployState;

export interface Endpoints {
  /*
   * Create a release
   * https://docs.github.com/en/rest/reference/repos#create-a-release
   */
  "POST /repos/{owner}/{repo}/releases": Record<
    | "owner"
    | "repo"
    | "target_commitish"
    | "tag_name"
    | "name"
    | "body"
    | "discussion_category_name",
    string
  >;
}

/*
 * Explorer
 * https://docs.github.com/en/graphql/overview/explorer
 */

export const blogDeployStateQuery = `
query getDeployments($owner: String!, $repo: String!) {
  repository(owner: $owner, name: $repo) {
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
query getDeployments($owner: String!, $repo: String!) {
  repository(owner: $owner, name: $repo) {
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
