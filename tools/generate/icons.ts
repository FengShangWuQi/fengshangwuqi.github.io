import * as path from "path";
import * as fse from "fs-extra";
import * as globby from "globby";
import * as prettier from "prettier";
import chalk from "chalk";

import { titleCase } from "../../utils/string";

export const generateIcons = () => {
  const icons = globby
    .sync(process.cwd() + "/src-components/icons/*.svg")
    .map(filePath => {
      const ext = path.extname(filePath);
      const base = path.basename(filePath, ext);

      return base;
    });

  const exportPath = process.cwd() + "/src-components/icons/Icon.tsx";
  fse.ensureFileSync(exportPath);
  fse.writeFileSync(
    exportPath,
    formatCode(icons.map(name => iconExport(name)).join(""), exportPath),
  );
  successGenerate(exportPath);

  const sbPath = process.cwd() + "/src-components/icons/__storybook__/Icon.tsx";
  fse.ensureFileSync(sbPath);
  fse.writeFileSync(sbPath, formatCode(iconStorybook(icons), sbPath));
  successGenerate(sbPath);
};

const getIconName = (name: string) => `Icon${titleCase(name)}`;

const iconExport = (name: string) =>
  `export { ReactComponent as ${getIconName(name)} } from "./${name}.svg";`;

const iconStorybook = (icons: string[]) => `
    import React from "react";

    import { useDesignSystem } from "../../../src-core/ds";
    import { flex } from "../../../src-core/style";
    
    import { ${icons.map(name => getIconName(name)).join(",")} } from "../"
    
    export default () => {
        const ds = useDesignSystem();

        return (
            <div css={{
              ...flex({
                flexWrap: "wrap",
              }),
              color: "#555",
              fill: "#555",
            }}>
              ${icons
                .map(
                  name => `<div
              css={{
                ...flex({
                  flexDirection: "column",
                  alignItems: "center",
                }),
                width: "16.66%",
              }}>
              <span
                css={{
                  fontSize: ds.size.xxl,
                }}>
                <${getIconName(name)} />
              </span>
              <span css={{ fontSize: ds.size.s }}>${getIconName(name)}</span>
            </div>`,
                )
                .join("")}
            </div>
        )
  }`;

const formatCode = (code: string, filePath: string) =>
  prettier.format(code, {
    ...prettier.resolveConfig.sync(filePath),
    parser: "typescript",
  });

const successGenerate = (path: string) =>
  console.log(chalk.green(`generate file ${path}`));
