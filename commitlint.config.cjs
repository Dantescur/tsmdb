module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [1, "always", 200],
    "footer-max-line-length": [1, "always", 200],
  },
};
