import { fromFrontMatter } from "./fromFrontMatter";

export enum README_TYPE {
  FRONT_MATTER = "front-matter",
}

export const generateReadme = (from: keyof README_TYPE): string => {
  switch (from) {
    case README_TYPE.FRONT_MATTER: {
      return fromFrontMatter();
    }
    default:
      return "";
  }
};
