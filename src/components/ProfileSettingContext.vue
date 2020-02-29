<template>
  <a class="profile setting-context">
    <Avatar src="https://lh3.googleusercontent.com/a-/AAuE7mALVW8QPSIGpCDFBEbv4M2Dfly5W7YTPe3UKMOfZw" uname="Rajat Sharma" />
    <div class="metadata">
      <div class="display-name"><h4>Rajat Sharma</h4></div>
      <div class="email"><small>rajat.prototype@gmail.com</small></div>
    </div>
  </a>
</template>

<script>
  import Avatar from './Avatar'

  export default {
    name: 'profile-setting-context',

    components: {
      Avatar
    }
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