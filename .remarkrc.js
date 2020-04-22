module.exports = {
  plugins: [
    [
      "remark-retext",
      require("unified")()
        .use(require("retext-english"))
        // .use(require("retext-spell"), {
        //   dictionary: require("dictionary-en"),
        // })
        // .use(require("retext-passive"))
        // .use(require("retext-indefinite-article"))
        .use(require("retext-redundant-acronyms")),
    ],
    ["remark-frontmatter", "yaml"],
    "remark-preset-lint-recommended",
    "remark-preset-lint-markdown-style-guide",
    ["remark-lint-emphasis-marker", false],
    ["remark-lint-heading-increment", false],
    ["remark-lint-no-heading-punctuation", false],
    ["remark-lint-list-item-indent", "space"],
    ["remark-lint-list-item-spacing", false],
    ["remark-lint-maximum-line-length", false],
    ["remark-lint-maximum-heading-length", false],
    ["remark-lint-no-duplicate-headings", false],
    ["remark-lint-no-duplicate-headings-in-section", true],
    ["remark-lint-no-emphasis-as-heading", false],
    ["remark-lint-no-literal-urls", false],
    ["remark-lint-no-reference-like-url", true],
    ["remark-lint-no-shortcut-reference-link", false],
    ["remark-lint-no-undefined-references", false],
    ["remark-lint-ordered-list-marker-value", "ordered"],
  ],
}