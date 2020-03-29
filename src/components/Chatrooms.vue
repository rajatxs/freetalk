<template>
  <section class="chat-room">
    <chatroom-instance v-for="(user) in chatrooms" :key="user.uid" :user="user" />
  </section>
</template>

<script>
  import ChatroomInstance from './ChatRoomInstance'

  export default {
    name: 'chat-room',

    components: {
      'chatroom-instance': ChatroomInstance
    },

    data() {
      return {
        chatrooms: [
          {
            displayName: "Nick Goodall",
            uid: "118818",
            photoURL: "https://avatars1.githubusercontent.com/u/4060535?s=400&v=4",
            lastChat: {
              message: "Hey Nick",
              time: "07:12 AM"
            }
          },
          {
            displayName: "Alessandro",
            uid: "481818",
            photoURL: "https://avatars1.githubusercontent.com/u/43508?s=400&v=4",
            lastChat: {
              message: "ya i will do that!",
              time: "12:10 PM"
            }
          },
          {
            displayName: "klaussner",
            uid: "8425819",
            photoURL: "https://avatars3.githubusercontent.com/u/1312807?s=400&v=4", 
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
  @media screen and (min-width: 768px) {
    .chat-room {
      padding: auto 4rem;
    }
  }
</style>