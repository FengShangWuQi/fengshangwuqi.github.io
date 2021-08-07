import axios from "axios";

const github = (data?: any, headers?: any) => {
  return axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data,
  });
};

export const githubFetcher = (
  query: string,
  variables: Record<string, any>,
) => {
  return github(
    {
      query,
      variables,
    },
    {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
  );
};
