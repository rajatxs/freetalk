<template>
  <section class="view" id="app-auth">
    <div class="elevation">
      <img v-bind:src="ChatElevationImage" alt="Freetalk" />
    </div>
    <header>
      <h1>Freetalk</h1>
    </header>
    <content>
      <p>Stay in touch with friends with simple and secure lightweight web messaging app</p>
    </content>
    <div class="actions">
      <button class="sign-up-btn">Sign in with Google</button>
    </div>
  </section>
</template>

<script>
import ChatElevationImage from '@/assets/auth-chat-elevation.png'

export default {
  name: 'app-auth',
  data() {
    return {
      ChatElevationImage
    }
  }
}
</script>

<style scoped>
#app-auth {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: inherit;
}
#app-auth .elevation {
  display: flex;
  justify-content: center;
  padding: 1em;
}
#app-auth .elevation img {
  width: 22em;
  height: auto;
}
#app-auth content {
  padding: 1em 3em;
  text-align: center;
}
#app-auth .actions {
  display: flex;
  flex-direction: column;
}
#app-auth .actions > button.sign-up-btn {
  padding: 0 2em;
  min-width: 9em !important;
  height: 2.4em !important;
  font-size: 1.4em !important;
  border-radius: 50px !important;
  box-shadow: 0 2px 6px #AAA;
}
</style>