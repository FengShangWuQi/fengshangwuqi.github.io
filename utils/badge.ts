import { toSearchString } from "./search";

export const generateBadgeUrl = (
  label: string,
  message: string,
  opts?: {
    color?:
      | "brightgreen"
      | "green"
      | "yellowgreen"
      | "yellow"
      | "orange"
      | "red"
      | "lightgrey"
      | "blue";
    style?: "plastic" | "flat" | "flat-square" | "for-the-badge" | "social";
    logo?: string;
  },
) => {
  const baseUrl = "https://img.shields.io/badge";
  const { color = "brightgreen", style = "flat", ...params } = opts || {};

  const url = `${baseUrl}/${label}-${message}-${color}${toSearchString({
    style,
    ...params,
  })}`;

  return url;
};
