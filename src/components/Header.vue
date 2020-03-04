<template>
  <header class="app-header">
    <div class="label">
      <h1>{{ label }}</h1>
    </div>
    <div v-if="profilebadge" class="badge">
      <router-link to="/settings" class="image-container">
        <img :src="photoURL" />
      </router-link>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "app-header",

    props: {
      label: {
        required: true,
        type: String
      },
      profilebadge: {
        type: Boolean,
        default: false
      }
    },
    computed: mapGetters(['photoURL'])
  }
</script>

<style>
  .app-header {
    display: flex;
    justify-content: space-between;
    padding: var(--base-margin);
  }
  .app-header h1 {
    color: var(--surface-fg-color);
  }
  .app-header .badge {
    display: flex;
    padding: 0 var(--base-margin);
    align-items: center;
  }
  .app-header img {
    width: 2.4em;
    height: 2.4em;
    border-radius: 25px;
  }
</style>