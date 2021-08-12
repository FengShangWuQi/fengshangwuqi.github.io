import { endpoint } from "../endpoint";

describe("endpoint #endpoint", () => {
  it("POST /repos/{owner}/{repo}/releases -- with owner, repo", () => {
    const opts = endpoint("POST /repos/{owner}/{repo}/releases", {
      owner: "fengshangwuqi",
      repo: "fengshangwuqi.github.io",
      target_commitish: "dev",
      tag_name: "issue-01",
      name: "#01",
      body: "content",
      discussion_category_name: "zhoubao",
    });

    expect(opts).toEqual({
      method: "POST",
      url: "/repos/fengshangwuqi/fengshangwuqi.github.io/releases",
      data: {
        target_commitish: "dev",
        tag_name: "issue-01",
        name: "#01",
        body: "content",
        discussion_category_name: "zhoubao",
      },
    });
  });
});
