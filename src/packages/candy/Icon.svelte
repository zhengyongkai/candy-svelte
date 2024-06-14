<script lang="ts">
  export let size: string = '14px';
  export let prefix: string = 'i-mdi-';
  export let icon: string;

  $: symbolId = () => `${prefix}${icon}`;
</script>

<i inline-block class={`${symbolId()}`} style={`width:${size};height:${size}`} />

<style lang="scss" scoped>
</style>
