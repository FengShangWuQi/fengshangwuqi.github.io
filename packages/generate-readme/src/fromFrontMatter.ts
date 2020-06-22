import globby from "globby";
import matter from "gray-matter";
import table from "markdown-table";

export const fromFrontMatter = (): string => {
  const targetFiles = globby.sync(["**/*.md", "README.md"], {
    gitignore: true,
  });

  const dataSource = targetFiles.map(targetPath => {
    const file = matter.read(targetPath);
    return file.data;
  });

  if (dataSource.length > 0) {
    const tableKeys = Object.keys(dataSource[0]);

    const content = table(
      [
        tableKeys,
        ...dataSource.map((item: Record<string, string>) =>
          Object.values(item),
        ),
      ],
      {
        align: "c",
      },
    );

    return content;
  }

  return "";
};
