<template>
  <div class="home">
    <app-header label="Chats" profilebadge />
    <people-status />
    <chat-rooms />
    <app-fab-icon />
  </div>
</template>

<script>
  import AppHeader from '@/components/Header'
  import PeopleStatus from '@/components/PeopleStatus'
  import Chatrooms from '@/components/Chatrooms'
  import FabIcon from '@/components/FabIcon'

  export default {
    name: 'home',

    components: {
      'app-header': AppHeader,
      'people-status': PeopleStatus,
      'chat-rooms': Chatrooms,
      'app-fab-icon': FabIcon
    }
  }
</script>
