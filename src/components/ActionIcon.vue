<template>
  <div v-bind:class="{ 'action-icon': true, colored }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'action-icon',

    props: {
      colored: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
  .action-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    padding: 8px;
    background-color: transparent;
    border-radius: 25px;
    transition: background-color 0.15s linear;
  }
  .action-icon:active {
    background-color: var(--pcolor-focus);
  }
  .action-icon svg {
    width: 2.2em;
    height: 2.2em;
    stroke: var(--surface-fg-color);
  }
  .action-icon.colored svg {
    stroke: var(--pcolor);
  }
</style>