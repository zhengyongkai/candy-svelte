<script lang="ts">
  import Button from './packages/candy/Button/Button.svelte';
  import Icon from './packages/candy/Icon.svelte';
  let loading = false;
  function onChange(e: any) {
    document.getElementsByTagName('body')[0].setAttribute('id', e.target.value);
  }

  function onLoading() {
    loading = true;
    setTimeout(() => {
      loading = false;
    }, 3000);
  }
</script>

<main>
  <select on:change={onChange}>
    <option value="">默认</option>
    <option value="classy">优雅</option>
  </select>

  <h3>基础按钮</h3>
  <Button size={'small'}>小按钮</Button>
  <Button size={'large'}>主要按钮</Button>
  <Button size={'middle'}>中等按钮</Button>
  <br />
  <h3>按钮状态</h3>

  <Button size={'middle'} type="error">中等按钮</Button>
  <br />
  <Button size={'middle'} type="info">中等按钮</Button>
  <br />
  <Button size={'middle'} type="warning">中等按钮</Button>
  <br />
  <Button size={'middle'} type="primary">中等按钮</Button>
  <br />
  <Button size={'middle'} type="success">中等按钮</Button>
  <br />
  <br />

  <br />
  <h3>圆角按钮</h3>
  <br />
  <Button size={'large'} circle={true} icon="search"></Button>
  <Button size={'large'} type="warning" circle={true} icon="star"></Button>

  <Button size="large" type="error" circle={true} icon="trash" disabled />
  <Button size="large" type="success" circle={true} icon="envelope" disabled />
  <br />
  <h3>带图标按钮</h3>
  <br />
  <Button size={'middle'} icon="magnify"></Button>
  <Button size={'middle'} icon="magnify">查询</Button>
  <Button size={'middle'} type="warning">
    啦啦啦
    <i class="fa fa-trash ml-5" />
  </Button>
  <Button size={'middle'} type="error" icon="trash" disabled>删除</Button>
  <br />
  <br />
  <h3>禁用按钮</h3>
  <br />

  <Button size={'middle'} type="error" disabled>中等按钮</Button>
  <br />
  <Button size={'middle'} type="success" disabled>中等按钮</Button>
  <br />
  <Button size={'middle'} type="warning" disabled>中等按钮</Button>
  <br />
  <Button size={'middle'} type="primary" disabled>中等按钮</Button>
  <br />
  <h3>加载状态</h3>

  <Button {loading} icon="trash">加载按钮</Button>

  <Button size={'middle'} on:click={onLoading}>加载3s</Button>
  <br />
  <br />
  <br />
</main>

<style>
</style>
