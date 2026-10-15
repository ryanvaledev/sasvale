import nextConfig from "eslint-config-next";

export default [
  {
    ignores: [
      "_legacy-reference/**",
      ".next/**",
      "node_modules/**",
      "scripts/**",
      "out/**",
      "build/**",
    ],
  },
  ...nextConfig,
];
