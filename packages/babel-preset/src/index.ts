import { declare } from "@babel/helper-plugin-utils";
import pluginTransformRuntime from "@babel/plugin-transform-runtime";
import pluginTransformTypescript from "@babel/plugin-transform-typescript";
import pluginProposalClassProperties from "@babel/plugin-proposal-class-properties";
import pluginProposalOptionalChaining from "@babel/plugin-proposal-optional-chaining";
import pluginProposalNullishCoalescingOperator from "@babel/plugin-proposal-nullish-coalescing-operator";

import pkg from "../package.json";

export default declare(() => {
  return {
    plugins: [
      [
        pluginTransformRuntime,
        {
          corejs: { version: 3, proposals: true },
          version: pkg.dependencies["@babel/runtime-corejs3"],
        },
      ],
      [pluginTransformTypescript, { isTSX: true }],
      [
        pluginProposalClassProperties,
        {
          loose: true,
        },
      ],
      [pluginProposalOptionalChaining],
      [pluginProposalNullishCoalescingOperator],
    ],
  };
});
