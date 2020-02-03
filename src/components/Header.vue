<template>
  <header class="app-header">
    <h1>{{ label }}</h1>
  </header>
</template>

<script>
  export default {
    name: "app-header",

    props: {
      label: {
        required: true,
        type: String
      }
    }
  }
</script>

<style>
  .app-header {
    padding: var(--base-margin);
  }
  .app-header h1 {
    color: var(--surface-fg-color);
  }
</style>