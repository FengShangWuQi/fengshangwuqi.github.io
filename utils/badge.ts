import { toSearchString } from "utils/search";

type BadgeColor =
  | "brightgreen"
  | "green"
  | "yellowgreen"
  | "yellow"
  | "orange"
  | "red"
  | "lightgrey"
  | "blue";

type BadgeStyle =
  | "plastic"
  | "flat"
  | "flat-square"
  | "for-the-badge"
  | "social";

type BadgeOptions = {
  color?: BadgeColor;
  style?: BadgeStyle;
  logo?: string;
};

const BADGE_BASE_URL = "https://img.shields.io/badge";

const DEFAULT_BADGE_COLOR = "brightgreen";
const DEFAULT_BADGE_STYLE = "flat";

export const generateBadgeUrl = ({
  label,
  message,
  options = {},
}: {
  label: string;
  message: string;
  options?: BadgeOptions;
}) => {
  const {
    color = DEFAULT_BADGE_COLOR,
    style = DEFAULT_BADGE_STYLE,
    ...rest
  } = options;
  const url = `${BADGE_BASE_URL}/${label}-${message}-${color}${toSearchString({
    style,
    ...rest,
  })}`;

  return url;
};
