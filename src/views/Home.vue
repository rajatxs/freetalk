<template>
  <div class="home">
    <app-header label="Chats" />
    <people-status />
  </div>
</template>

<script>
  import AppHeader from '@/components/Header'
  import PeopleStatus from '@/components/PeopleStatus'

  export default {
    name: 'home',
    components: {
      'app-header': AppHeader,
      'people-status': PeopleStatus
    }
  }
</script>
