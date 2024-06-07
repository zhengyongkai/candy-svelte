<script lang="ts">
  export let type: "primary" | "error" | "warning" | "info" = "primary";
  // export let rounded: number = 4;
  export let circle: boolean = false;
  export let size: "large" | "middle" | "small" = "middle";
  export let icon: string | undefined = undefined;
  export let disabled: boolean = false;
  export let loading: boolean = false;

  const defaultClass =
    "candy-button box-border transition-all  inline-flex font-medium cursor-pointer items-center";

  const typeColorObj = {
    primary:
      "border-1 border-solid border-primary bg-primary text-white fill-white hover:opacity-80 active:opacity-80",
    error:
      "text-error border-1 border-solid border-error bg-error text-white hover:opacity-80 active:opacity-80",
    warning:
      "text-warning border-1 border-solid border-warning bg-warning text-white hover:opacity-80 active:opacity-80",
    info: "text-info border-1 border-solid border-info bg-info text-white hover:opacity-80 active:opacity-80"
  };

  const sizeObj = {
    large: "px-20 py-12 text-14",
    middle: "px-15 py-9 text-12",
    small: "px-15 py-7 text-12"
  };

  const roundedSizeObj = {
    large: "p-12",
    middle: "p-9",
    small: "p-7"
  };

  $: circleClass = () => {
    return circle
      ? `rounded-[50%] ${roundedSizeObj[size]}`
      : `rounded-4 ${sizeObj[size]}`;
  };

  $: disabledClass = () => {
    return disabled || loading
      ? "cursor-not-allowed opacity-80 hover:opacity-80 active:opactiy:80"
      : "";
  };

  $: iconClass = () => {
    return icon ? "" : "";
  };
</script>

<button
  class={`${disabledClass()}  ${defaultClass} ${typeColorObj[type]} ${circleClass()} `}
>
  {#if loading}
    <i class={`fa fa-spinner animate-spin`}></i>
  {/if}
  {#if icon || $$slots.icon}
    {#if icon}
      <i class={`fa fa-${icon}`}></i>
    {:else}
      <slot name="icon" />
    {/if}
  {/if}

  {#if $$slots.default}
    <div><slot /></div>
  {/if}
</button>

<style lang="scss" scoped>
  .candy-button i + div {
    margin-left: 5px;
  }
</style>
