// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: [
        "plugin:vue/strongly-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "prettier",
        "plugin:css/standard",
    ],
    plugins: ["@typescript-eslint", "prettier", "css"],
    rules: {
        "no-shadow": "warn",
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "vue/no-multiple-template-root": "off",
        "at-rule-no-unknown": 0,
        camelcase: ["error", { properties: "never" }],
    },
};
