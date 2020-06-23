import { fromFrontMatter } from "./fromFrontMatter";

export enum README_TYPE {
  FRONT_MATTER = "FRONT_MATTER",
}

export const generateReadme = (from: keyof typeof README_TYPE): string => {
  switch (from) {
    case README_TYPE.FRONT_MATTER: {
      return fromFrontMatter();
    }
    default:
      return "";
  }
};
