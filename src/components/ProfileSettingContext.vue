<template>
  <a class="profile setting-context">
    <Avatar :src="photoURL" :uname="displayName" />
    <div class="metadata">
      <div class="display-name"><h4>{{ displayName }}</h4></div>
      <div class="email"><small>{{ email }}</small></div>
    </div>
  </a>
</template>

<script>
  import Avatar from './Avatar'
  import { mapGetters } from 'vuex'

  export default {
    name: 'profile-setting-context',

    components: {
      Avatar
    },
    computed: mapGetters(['displayName', 'email', 'photoURL'])
  }
</script>

<style scoped>
  .setting-context.profile {
    padding: 8px;
    border-radius: 8px;
    display: flex;
    justify-content: stretch;
  }
  .setting-context.profile .metadata {
    padding: 8px;
  }
  .setting-context.profile .metadata .email {
    padding: 0px 8px;
  }
</style>