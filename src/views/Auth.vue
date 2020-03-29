<template>
  <section class="app-auth">
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
      <button @click="signIn" class="sign-up-btn" title="Use your Google Account">Sign in with Google</button>
    </div>
  </section>
</template>

<script>
import ChatElevationImage from '@/assets/auth-chat-elevation.png'
import firebase from 'firebase'
import { auth } from '@/firebase-init'

export default {
  name: 'app-auth',
  data() {
    return {
      ChatElevationImage
    }
  },
  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithRedirect(provider);
    }
  }
}
</script>

<style scoped>
.app-auth {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: inherit;
}
.app-auth .elevation {
  display: flex;
  justify-content: center;
  padding: 1em 8px;
}
.app-auth .elevation img {
  width: 22em;
  height: auto;
}
.app-auth content {
  /* padding: 1em 3em; */
  width: 60%;
  text-align: center;
  line-height: 1.4em;
  color: var(--text-color-priority);
}
.app-auth .actions {
  display: flex;
  flex-direction: column;
}
.app-auth .actions > button.sign-up-btn {
  padding: 0 1.35em;
  min-width: 2em !important;
  height: 2.4em !important;
  font-size: 1.3em !important;
  border-radius: 50px !important;
  box-shadow: 0 2px 6px #AAA;
}
</style>