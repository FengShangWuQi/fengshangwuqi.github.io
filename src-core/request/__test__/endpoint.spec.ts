import { endpoint } from "../endpoint";

describe("endpoint #endpoint", () => {
  it("POST /repos/{owner}/{repo}/releases -- with owner, repo", () => {
    const opts = endpoint("POST /repos/{owner}/{repo}/releases", {
      owner: "fengshangwuqi",
      repo: "fengshangwuqi.github.io",
    });

    expect(opts).toEqual({
      method: "POST",
      url: "/repos/fengshangwuqi/fengshangwuqi.github.io/releases",
    });
  });

  it("POST /repos/{owner}/{repo}/releases -- with headers", () => {
    const opts = endpoint("POST /repos/{owner}/{repo}/releases", {
      headers: {
        authorization: `token 0000000000000000000000000000000000000001`,
      },
      owner: "fengshangwuqi",
      repo: "fengshangwuqi.github.io",
    });

    expect(opts).toEqual({
      headers: {
        authorization: `token 0000000000000000000000000000000000000001`,
      },
      method: "POST",
      url: "/repos/fengshangwuqi/fengshangwuqi.github.io/releases",
    });
  });
});
