const common = {
  colors: {
    primary: "rgba(var(--theme-color-primaryBlack), <alpha-value>)",
    success: "rgba(var(--theme-color-functional-success), <alpha-value>)",
    warning: "rgba(var(--theme-color-functional-warning), <alpha-value>)",
    error: "rgba(var(--theme-color-functional-error), <alpha-value>)",
    info: "rgba(var(--theme-color-functional-info), <alpha-value>)"
  },
  padding: {
    buttonLaPx: "var(--theme-botton-padding-large-px)",
    buttonLaPy: "var(--theme-botton-padding-large-py)",
    buttonSmPx: "var(--theme-botton-padding-small-px)",
    buttonSmPy: "var(--theme-botton-padding-small-py)",
    buttonMdPx: "var(--theme-botton-padding-middle-px)",
    buttonMdPy: "var(--theme-botton-padding-middle-py)"
  },
  borderRadius: {
    button: "var(--theme-botton-radius-xy)"
  }
};

export default { common };
