<template>
  <section class="settings">
    <app-header label="Settings" />
    <div class="context-wrapper">
      <profile-setting-context />
      <hr />
      <!-- <setting-context 
        class="red-text"
        label="Log out" 
        controller="checkbox"
        :tap="logOut"
        :oncheck="updateAppTheme" /> -->
      <setting-context 
        class="red-text"
        label="Log out" 
        :tap="logOut" />
    </div>
  </section>
</template>

<script>
  import Header from '@/components/Header'
  import ProfileSettingContext from '@/components/ProfileSettingContext'
  import SettingContext from '@/components/SettingContext'
  import { auth } from '../firebase-init'

  export default {
    name: 'app-settings',

    components: {
      'app-header': Header,
      'profile-setting-context': ProfileSettingContext,
      'setting-context': SettingContext
    },
    methods: {
      logOut() {
        return auth.signOut();
      }
    }
  }
</script>

<style>
  .context-wrapper {
    padding: 8px var(--base-margin);
  }
</style>