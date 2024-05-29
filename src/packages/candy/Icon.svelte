<script lang="ts">
  export let size: string = "1em";
  export let prefix: string = "icon";
  export let icon: string;
  export let color: string = "black";

  $: symbolId = () => `#${prefix}-${icon}`;
</script>

<svg aria-hidden="true" class="svg-icon" width={size} height={size}>
  <use xlink:href={symbolId()} fill={color} />
</svg>
