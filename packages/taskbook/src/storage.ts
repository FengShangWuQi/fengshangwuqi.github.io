import path from "path";
import fse from "fs-extra";
import os from "os";

export const tbPath = path.join(os.homedir(), ".taskbook", "tb.json");

class Storage {
  getData(filePath: string) {
    if (!fse.pathExistsSync(filePath)) {
      return {};
    }

    return fse.readJsonSync(filePath);
  }

  setData(filePath: string, data: JSON) {
    fse.outputJsonSync(filePath, data, { spaces: 4 });
  }
}

export const storage = new Storage();
