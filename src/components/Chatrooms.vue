<template>
  <section class="chat-room">
    <router-link to="/chats" class="instance anchor-data-item" v-for="(room, i) in chatrooms" v-bind:key="i">
      <Avatar v-bind:src="room.avatar" />
      <div class="details">
        <h4 class="display-name">{{ room.uname }}</h4>
        <div class="last-message">
          <span class="message"><small>{{ room.lastChat.message }}</small></span>
          <span class="time"><small>{{ room.lastChat.time }}</small></span>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
  import Avatar from './Avatar';

  export default {
    name: 'chat-room',
    components: {
      Avatar
    },

    data() {
      return {
        chatrooms: [
          {
            uname: "Nick Goodall",
            id: "118818",
            avatar: "https://avatars1.githubusercontent.com/u/4060535?s=400&v=4",
            lastChat: {
              message: "Hey Nick",
              time: "07:12 AM"
            }
          },
          {
            uname: "Alessandro",
            id: "481818",
            avatar: "https://avatars1.githubusercontent.com/u/43508?s=400&v=4",
            lastChat: {
              message: "ya i will do that!",
              time: "12:10 PM"
            }
          },
          {
            uname: "klaussner",
            id: "8425819",
            avatar: "https://avatars3.githubusercontent.com/u/1312807?s=400&v=4", 
            lastChat: {
              message: "Have a nice day",
              time: "07:30 AM"
            }
          }
        ]
      }
    }
  }
</script>

<style>
  .chat-room {
    padding: 12px 0;
  }
  .chat-room .instance {
    margin: 5px 0;
    display: grid;
    grid-template-columns: 5.5em auto;
    border-radius: 8px;
  }
  .chat-room .instance .avatar {
    height: 100%;
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 50px;
  }
  .chat-room .instance .avatar img {
    width: 3.8em;
    height: 3.8em;
  }
  .chat-room .instance .details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 1.4em;
  }
  .chat-room .instance .details h4 {
    padding: 4px;
  }
  .chat-room .instance .details .last-message {
    padding: 4px;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) {
    .chat-room {
      padding: auto 4rem;
    }
  }
</style>