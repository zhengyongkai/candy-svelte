<script lang="ts">
  import Button from "./packages/candy/Button.svelte";
  import Icon from "./packages/candy/Icon.svelte";
</script>

<main>
  <h3>基础按钮</h3>
  <Button size={"small"}>小按钮</Button>
  <Button size={"large"}>主要按钮</Button>
  <Button size={"middle"}>中等按钮</Button>
  <br />
  <h3>按钮状态</h3>
  <Button size={"middle"} type="default">中等按钮</Button>
  <Button size={"middle"} type="danger">中等按钮</Button>
  <Button size={"middle"} type="info">中等按钮</Button>
  <Button size={"middle"} type="warning">中等按钮</Button>
  <Button size={"middle"} type="primary">中等按钮</Button>
  <br />

  <br />
  <h3>圆角按钮</h3>
  <br />
  <Button size={"large"} circle={true}>
    <Icon icon="svelte"></Icon>
  </Button>
</main>

<style>
</style>
