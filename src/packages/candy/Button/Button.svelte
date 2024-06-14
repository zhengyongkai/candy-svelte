<script lang="ts">
  export let type: 'primary' | 'error' | 'warning' | 'info' | 'success' = 'primary';
  export let circle: boolean = false;
  export let size: 'large' | 'middle' | 'small' = 'middle';
  export let icon: string | undefined = undefined;
  export let disabled: boolean = false;
  export let loading: boolean = false;

  const defaultClass =
    'candy-button box-border transition-all  inline-flex font-medium cursor-pointer items-center';

  const typeColorObj = {
    primary: {
      common:
        'border-1 border-solid border-primary bg-primary text-white fill-white hover:bg-primaryColorHover active:bg-primaryColorActive',
      disabled:
        'bg-primaryColorDisabled  hover:bg-primaryColorDisabled active:bg-primaryColorDisabled'
    },
    error: {
      common:
        'text-error border-1 border-solid border-error bg-error text-white hover:bg-errorColorHover active:bg-errorColorActive',
      disabled: 'bg-errorColorDisabled hover:bg-errorColorDisabled active:bg-errorColorDisabled'
    },
    warning: {
      common:
        'text-warning border-1 border-solid border-warning bg-warning text-white hover:bg-warningColorHover active:bg-warningColorActive',
      disabled:
        'bg-warningColorDisabled hover:bg-warningColorDisabled active:bg-warningColorDisabled'
    },

    info: {
      common:
        'text-info border-1 border-solid border-info bg-info text-white hover:bg-infoColorHover active:bg-infoColorActive',
      disabled:
        'bg-warningColorDisabled hover:bg-warningColorDisabled active:bg-warningColorDisabled'
    },
    success: {
      common:
        'text-info border-1 border-solid border-info bg-success text-white hover:bg-successColorHover active:bg-successColorActive',
      disabled:
        'bg-successColorDisabled hover:bg-successColorDisabled active:bg-successColorDisabled'
    }
  };

  const sizeObj = {
    large: 'px-20 py-12 text-14',
    middle: 'px-15 py-9 text-14',
    small: 'px-15 py-7 text-12'
  };

  const roundedSizeObj = {
    large: 'p-12',
    middle: 'p-9',
    small: 'p-7'
  };

  $: circleClass = () => {
    return circle ? `rounded-[50%] ${roundedSizeObj[size]}` : `rounded-4 ${sizeObj[size]}`;
  };

  $: disabledClass = () => {
    let className = typeColorObj[type].disabled;

    return disabled || loading ? className + ' cursor-not-allowed ' : '';
  };
</script>

<button
  on:click
  class={`${disabledClass()}  ${defaultClass} ${typeColorObj[type].common} ${circleClass()} `}>
  {#if loading}
    <i class={`fa fa-spinner animate-spin`}></i>
  {:else if icon || $$slots.icon}
    {#if icon}
      <i class={`i-mdi-${icon}`}></i>
    {:else}
      <slot name="icon" />
    {/if}
  {/if}

  {#if $$slots.default}
    <span><slot /></span>
  {/if}
</button>

<style lang="scss" scoped>
  .candy-button > i + span {
    margin-left: 5px;
  }
</style>
