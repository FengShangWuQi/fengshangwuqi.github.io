import path from "path";
import fse from "fs-extra";
import globby from "globby";
import prettier from "prettier";
import chalk from "chalk";

import { camelCase } from "lodash";

const formatCode = (code: string, filePath: string) =>
  prettier.format(code, {
    ...prettier.resolveConfig.sync(filePath),
    parser: "typescript",
  });

const successGenerate = (path: string) =>
  console.log(chalk.green(`generate file ${path}`));

const getIconName = (name: string) =>
  `Icon${camelCase(name).replace(/^[a-z]/, match => match.toUpperCase())}`;

const iconExport = (name: string) =>
  `export { ReactComponent as ${getIconName(
    name,
  )} } from "./icons/${name}.svg";`;

const iconStorybook = (icons: string[]) => `
    import React from "react";

    import { useDesignSystem } from "src-core/ds";
    import { grid } from "src-core/style";
    
    import { ${icons.map(name => getIconName(name)).join(",")} } from "../Icon"
    
    export const IconDemo = () => {
        const ds = useDesignSystem();

        return (
            <div css={{
							...grid({
								gridTemplateColumns: "repeat(6, 1fr)",
								gridColumnGap: ds.spacing[3],
								gridRowGap: ds.spacing[3],
							}),
              color: ds.color.textLight,
              fill: ds.color.textLight,
            }}>
              ${icons
                .map(
                  name => `<div
              css={{
								...grid({}),
              }}>
              <span
                css={{
									justifySelf: "center",
                  fontSize: ds.size["4xl"],
                }}>
                <${getIconName(name)} />
              </span>
							<span
								css={{
									justifySelf: "center",
                  fontSize: ds.size.sm,
								}}>
								IconGithubFill
							</span>
            </div>`,
                )
                .join("")}
            </div>
        )
  }`;

export const generateIcons = () => {
  const icons = globby
    .sync(process.cwd() + "/src-components/basic/icons/*.svg")
    .map(filePath => {
      const ext = path.extname(filePath);
      const base = path.basename(filePath, ext);

      return base;
    });

  const exportPath = process.cwd() + "/src-components/basic/Icon.tsx";
  fse.ensureFileSync(exportPath);
  fse.writeFileSync(
    exportPath,
    formatCode(icons.map(name => iconExport(name)).join(""), exportPath),
  );
  successGenerate(exportPath);

  const sbPath =
    process.cwd() + "/src-components/basic/__storybook__/Icon.stories.tsx";
  fse.ensureFileSync(sbPath);
  fse.writeFileSync(sbPath, formatCode(iconStorybook(icons), sbPath));
  successGenerate(sbPath);
};
