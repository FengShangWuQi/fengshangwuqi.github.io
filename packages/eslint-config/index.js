module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-unsafe-return": 1,
    "@typescript-eslint/no-unsafe-assignment": 1,
    "@typescript-eslint/no-non-null-assertion": 1,
    "@typescript-eslint/no-var-requires": 1,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-floating-promises": [2, { ignoreIIFE: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
