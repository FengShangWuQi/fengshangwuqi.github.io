import execa from "execa";

(async () => {
  const { stdout } = await execa("git", ["branch", "-a"]);
  const branchList = stdout
    .split("\n")
    .map(item => item.trim().slice("remotes/origin".length + 1));

  // clean snyk branch
  const snykBranch = branchList.filter(branch => branch.includes("snyk"));

  for (let i = 0; i < snykBranch.length; i++) {
    const branchName = snykBranch[i];

    await execa("git", ["push", "--no-verify", "origin", `:${branchName}`], {
      stdio: `inherit`,
    });
  }
})();
