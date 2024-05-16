<script lang="ts">
  export let theme: "primary" | "success" | "warning" | "error" | "info" =
    "info";

  export let size: "large" | "default" | "small" = "default";

  const stateObj = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    error: "bg-error",
    info: "bg-info",
  };

  export const sizeObj = {
    large: "py-[19px] px-[12px]",
    default: "py-[15px] px-[8px]",
    small: "py-[5px] px-[11px]",
  };
</script>

<button class={`${stateObj[theme]} active:opacity-80 ${sizeObj[size]}`}>
  <slot />
</button>

<style lang="scss">
</style>
