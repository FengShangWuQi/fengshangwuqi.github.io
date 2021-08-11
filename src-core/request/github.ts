import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

import { Endpoints } from "../../src-client/github";
import { endpoint, Route } from "./endpoint";

export class GitHub {
  client: AxiosInstance;
  BASE_URL = "https://api.github.com";

  constructor(token: string) {
    this.client = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
  }

  /*
   * https://docs.github.com/en/graphql
   */
  graphql(query: string, variables: Record<string, string>) {
    return this.client({
      url: "/graphql",
      method: "POST",
      data: {
        query,
        variables,
      },
    });
  }

  /*
   * https://docs.github.com/en/rest
   */
  request<R extends Route>(
    route: Route,
    parameters: Endpoints[R] & AxiosRequestConfig,
  ) {
    const opts = endpoint(route, parameters);

    return this.client(opts);
  }
}

export const github = new GitHub(process.env.GITHUB_TOKEN as string);
