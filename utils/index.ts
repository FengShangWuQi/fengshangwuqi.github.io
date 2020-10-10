import React from "react";
import isPropValid from "@emotion/is-prop-valid";

export const pickElmAttrs = (props: Record<string, any>) => {
  const p: Record<string, any> = {};

  Object.keys(props).forEach(key => {
    if (isPropValid(key)) {
      p[key] = props[key];
    }
  });

  return p;
};

export const sleep = async (interval: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
};

export const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export const withoutBubble = (cb: () => void) => (e: React.SyntheticEvent) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  cb();
};
