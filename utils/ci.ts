import { logger } from "@fengshangwuqi/logger";

interface IEnvDetect {
  key: string;
  name: string;
}

const getEnvDetect =
  ({ key, name }: IEnvDetect): (() => string | null) =>
  () =>
    process.env[key] ? name : null;

const CI_DEFINITIONS = [
  getEnvDetect({ key: "VERCEL", name: "Vercel" }),
  getEnvDetect({ key: "GITHUB_ACTIONS", name: "GitHub Actions" }),
];

const lookupCI = (): string | null => {
  for (const fn of CI_DEFINITIONS) {
    try {
      const res = fn();

      if (res) {
        return res;
      }
    } catch (err) {
      logger(err).withLevel("ERROR");
    }
  }
  return null;
};

const CIName = lookupCI();

export const isCI = (): boolean => !!CIName;

export const getCIName = (): string | null => (isCI() ? CIName : null);
