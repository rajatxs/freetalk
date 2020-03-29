<template>
  <router-link :to="`/chats/${user.uid}`" class="chatroom-instance anchor-data-item">
    <Avatar v-bind:src="user.photoURL" />
    <div class="details">
      <h4 class="display-name">{{ user.displayName }}</h4>
      <div class="last-message">
        <span class="message"><small>{{ user.lastChat.message }}</small></span>
        <span class="time"><small>{{ user.lastChat.time }}</small></span>
      </div>
    </div>
  </router-link>
</template>

<script>
  import Avatar from './Avatar';

  export default {
    name: 'chatroom-instance',

    props: {
      user: {
        type: Object,
        require: true
      }
    },

    components: {
      Avatar
    }
  }
</script>

<style>
  .chatroom-instance {
    margin: 5px 0;
    display: grid;
    grid-template-columns: 5.5em auto;
    border-radius: 8px;
  }
  .chatroom-instance .avatar {
    height: 100%;
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 50px;
  }
  .chatroom-instance .avatar img {
    width: 3.8em;
    height: 3.8em;
  }
  .chatroom-instance .details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 1.4em;
  }
  .chatroom-instance .details h4 {
    padding: 4px;
  }
  .chatroom-instance .details .last-message {
    padding: 4px;
    display: flex;
    justify-content: space-between;
  }
</style>