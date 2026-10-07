export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "web",
        "admin",
        "db",
        "api",
        "auth",
        "ui",
        "email",
        "logger",
        "config",
        "repo",
        "deps",
        "release",
      ],
    ],
  },
};
