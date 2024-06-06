<script lang="ts">
  export let size: string = "1em";
  export let prefix: string = "icon";
  export let icon: string;
  export let color: string = "";

  $: symbolId = () => `#${prefix}-${icon}`;
</script>

<svg
  {...$$props}
  class={`svg-icon ${$$props.class}`}
  aria-hidden="true"
  width={size}
  height={size}
>
  <use xlink:href={symbolId()} fill={color} />
</svg>
