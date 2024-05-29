<script lang="ts">
  export let type: "primary" | "default" | "danger" | "warning" | "info" =
    "primary";
  // export let rounded: number = 4;
  export let circle: boolean = false;
  export let size: "large" | "middle" | "small" = "middle";

  const defaultClass =
    "box-border transition-all  flex font-medium cursor-pointer";

  const typeColorObj = {
    primary:
      "text-primary border-1 border-solid border-primary bg-primary text-white",
    danger:
      "text-danger border-1 border-solid border-danger bg-danger text-white",
    warning:
      "text-warning border-1 border-solid border-warning bg-warning text-white",
    info: "text-info border-1 border-solid border-info bg-info text-white",
    default: " border-1 text-black border-solid border-default bg-default  "
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
</script>

<button
  class={`${defaultClass} ${typeColorObj[type]} ${circleClass()} hover:opacity-80 active:opacity-90 `}
>
  <slot />
</button>

<style lang="scss">
</style>
