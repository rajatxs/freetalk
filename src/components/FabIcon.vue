<template>
  <router-link tag="button" to="/peoples">
    <span class="ic">
      <navigation-icon />
    </span>
    <span class="label">New chat</span>
  </router-link>
</template>

<script>
  import { NavigationIcon } from 'vue-feather-icons'

  export default {
    name: 'app-fab-icon',

    components: {
      'navigation-icon': NavigationIcon
    }
  }
</script>

<style scoped>
  button {
    position: fixed;
    bottom: 5%;
    padding: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 8rem !important;
    height: 2.8em;
    border-radius: 50px;
    box-shadow: 1px 1px 12px 4px var(--button-shadow-color);
  }
  button .ic,
  button .label {
    padding: 4px;
  }
  button .ic svg {
    width: 1.1em;
    height: 1.1em;
  }
  @media screen and (min-width: 310px) {
    button {
      height: 2.8em !important;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media screen and (min-width: 768px) {
    button {
      height: 3em !important;
      left: unset;
      transform: unset;
      right: 8%;
    }
  }
</style>