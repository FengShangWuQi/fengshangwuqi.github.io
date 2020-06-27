import { readdir, copySync } from "fs-extra";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

const getSectionName = (mindnodeName: string) => mindnodeName.split(".")[0];

const getSectionTitle = (sectionName: string) =>
  `${"#".repeat(sectionName.split("-").length + 1)} ${sectionName}`;

export const fromMindnode = async (): Promise<string> => {
  const rootPath = process.cwd();
  const publicPath = `${rootPath}/public`;
  const tmpPath = `${rootPath}/tmp`;

  const dirs = await readdir(rootPath);
  const mindnodes = dirs.filter(name => name.includes(".mindnode"));

  mindnodes.map(mindnodeName => {
    const sectionName = getSectionName(mindnodeName);

    const soureFile = `${rootPath}/${mindnodeName}/QuickLook/Preview.jpg`;
    const tmpTargetFile = `${tmpPath}/${sectionName}.jpg`;

    copySync(soureFile, tmpTargetFile);
  }, "");

  await imagemin([`${tmpPath}/*.jpg`], {
    destination: publicPath,
    plugins: [
      imageminWebp({
        quality: 75,
      }),
    ],
  });

  const docContent = mindnodes.reduce((prev, mindnodeName) => {
    const sectionName = getSectionName(mindnodeName);

    const sectionTitle = getSectionTitle(sectionName);
    const sectionImg = `![${sectionName}](${sectionName}.webp)`;

    return `${prev}\n${sectionTitle}\n\n${sectionImg}\n`;
  }, "");

  return docContent;
};
