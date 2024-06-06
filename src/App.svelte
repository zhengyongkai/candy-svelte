<script lang="ts">
  import Button from "./packages/candy/Button.svelte";
  import Icon from "./packages/candy/Icon.svelte";

  function onChange(e: any) {
    document.getElementsByTagName("body")[0].setAttribute("id", e.target.value);
  }
</script>

<main>
  <select on:change={onChange}>
    <option value="">默认</option>
    <option value="classy">优雅</option>
  </select>

  <h3>基础按钮</h3>
  <Button size={"small"}>小按钮</Button>
  <Button size={"large"}>主要按钮</Button>
  <Button size={"middle"}>中等按钮</Button>
  <br />
  <h3>按钮状态</h3>
  <Button size={"middle"} type="default">中等按钮</Button>
  <Button size={"middle"} type="error">中等按钮</Button> <br />
  <Button size={"middle"} type="info">中等按钮</Button> <br />
  <Button size={"middle"} type="warning">中等按钮</Button> <br />
  <Button size={"middle"} type="primary">中等按钮</Button> <br />
  <br />

  <br />
  <h3>圆角按钮</h3>
  <br />
  <Button size={"large"} circle={true} icon="svelte"></Button>
  <br />
  <h3>带图标按钮</h3>
  <br />
  <Button size={"large"} icon="svelte">在一块</Button>
  <br />
  <br />
  <h3>禁用按钮</h3>
  <br />
  <Button size={"large"} disabled>在一块</Button>
  <br />
</main>

<style>
</style>
