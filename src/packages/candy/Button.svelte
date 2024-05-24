<script lang="ts">
  export let theme: "primary" | "success" | "warning" | "error" | "info" =
    "error";

  export let size: "large" | "default" | "small" = "small";

  const  sizeObj = {
    large:{
      px:'px-buttonLaPx',
      py:'py-buttonLaPy'
    },
    default:{
      px:'px-buttonMdPx',
      py:'py-buttonMdPy'
    },
    small:{
      px:'px-buttonSmPx',
      py:'py-buttonSmPy'
    },
  }

  const stateObj = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    error: "bg-error",
    info: "bg-info",
  };

  
</script>

<button class={`${stateObj[theme]}  ${sizeObj[size].px} ${sizeObj[size].py}  rounded-button active:opacity-80 `}>
  <slot />
</button>

<style lang="scss">
</style>
