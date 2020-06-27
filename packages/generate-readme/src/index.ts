import { fromFrontMatter } from "./fromFrontMatter";
import { fromMindnode } from "./fromMindnode";

export enum README_TYPE {
  FRONT_MATTER = "FRONT_MATTER",
  MINDNODE = "MINDNODE",
}

export const generateReadme = (from: keyof typeof README_TYPE) => {
  switch (from) {
    case README_TYPE.FRONT_MATTER: {
      return fromFrontMatter();
    }
    case README_TYPE.MINDNODE: {
      return fromMindnode();
    }
    default:
      return "";
  }
};
