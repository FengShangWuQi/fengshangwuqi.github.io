import path from "path";
import fse from "fs-extra";
import os from "os";

import { errorLog } from "./utils";

export const pbPath = path.join(os.homedir(), ".postbook");
export const configPath = path.join(pbPath, "config.json");
export const templateDir = path.join(pbPath, "templates");

export const getConfig = () => {
  if (fse.pathExistsSync(configPath)) {
    const config = fse.readJsonSync(configPath);

    return config;
  }

  errorLog("config file not found, pb init first.");

  process.exit(1);
};

export const getTemplateContent = (name: string) => {
  const templatePath = path.join(templateDir, `${name}.md`);

  if (fse.pathExistsSync(templatePath)) {
    const content = fse.readFileSync(templatePath, "utf8");

    return content;
  }

  errorLog("template not found.");

  return "";
};
