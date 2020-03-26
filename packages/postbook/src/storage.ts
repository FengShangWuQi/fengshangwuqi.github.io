import { join } from "path";
import { readFile, readJson, pathExists } from "fs-extra";
import { isArray } from "lodash";
import os from "os";

import { errorLog } from "./utils";

export const pbPath = join(os.homedir(), ".postbook");
export const configPath = join(pbPath, "config.json");
export const templateDir = join(pbPath, "templates");
export const metaDir = join(pbPath, "meta");

export const getConfig = async () => {
  const isConfigExist = await pathExists(configPath);

  if (isConfigExist) {
    const config = await readJson(configPath);

    return config;
  }

  errorLog("config file not found, pb init first.");

  process.exit(1);
};

export const getMetaContent = async (name: string) => {
  const metaPath = join(metaDir, `${name}.json`);

  const isMetaExist = await pathExists(metaPath);

  if (isMetaExist) {
    const meta = await readJson(metaPath);

    const content = Object.keys(meta).reduce(
      (prev, curr) =>
        isArray(meta[curr])
          ? prev.concat(
              `${curr}:\n${meta[curr]
                .map((item: string) => `${" ".repeat(2)}- ${item}\n`)
                .join("")}`,
            )
          : prev.concat(`${curr}: ${meta[curr]}`),
      "",
    );

    return content;
  }

  errorLog("meta not found.");

  process.exit(1);
};

export const getTemplateContent = async (name: string) => {
  const templatePath = join(templateDir, `${name}.md`);

  const isTemplateExist = await pathExists(templatePath);

  if (isTemplateExist) {
    const content = await readFile(templatePath, "utf8");

    return content;
  }

  errorLog("template not found.");

  process.exit(1);
};
