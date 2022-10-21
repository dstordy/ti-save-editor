module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: [
      "./tsconfig.json",
      "./tsconfig.node.json",
      "./tsconfig.eslint.json",
    ],
  },
  plugins: ["react", "@typescript-eslint", "import"],
  rules: {
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
