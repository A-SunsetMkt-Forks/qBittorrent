export default {
    extends: "stylelint-config-standard",
    plugins: [
        "stylelint-order"
    ],
    ignoreFiles: ["private/css/lib/*.css"],
    rules: {
        "color-hex-length": null,
        "comment-empty-line-before": null,
        "comment-whitespace-inside": null,
        "function-name-case": null,
        "length-zero-no-unit": null,
        "no-descending-specificity": null,
        "order/properties-alphabetical-order": true,
        "selector-class-pattern": null,
        "selector-id-pattern": null,
        "value-keyword-case": null
    }
};
