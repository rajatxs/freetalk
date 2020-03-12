<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import './App.css'

  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    height: inherit;
  }
  @media screen and (min-width: 992px) {
    #app {
      box-shadow: 0 2px 8px #CCC;
      background-color: #FFF;
    }
  }
</style>
