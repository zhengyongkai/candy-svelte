<script lang="ts">
  import Button from '../packages/candy/Button/Button.svelte';
  let foo = {
    theme: 'error'
  } as {
    theme: 'error' | 'primary';
  };
</script>

<Button bind:theme={foo.theme}>dasdasd</Button>
