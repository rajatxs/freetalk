<template>
  <div class="avatar">
    <img 
      v-bind:src="src" 
      v-bind:alt="uname" 
      v-bind:title="uname" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',

  props: {
    src: {
      required: true,
      type: String
    },
    uname: String
  }
}
</script>

<style>
  .avatar {
    width: 4.4em;
    height: 4.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
  }
  .avatar img {
    width: inherit;
    height: inherit;
    border-radius: inherit;
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-focus: none;
  }
</style>