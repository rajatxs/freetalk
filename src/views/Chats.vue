<template>
  <section class="chats">
    <div class="topbar">
      <div class="jump-previous-action" @click="back">
        <action-icon colored>
          <arrow-left-icon />
        </action-icon>
      </div>
      <router-link to="/user" class="target-profile">
        <div class="display-name"><h4>John albert</h4></div>
        <div class="last-access"><small>Active now</small></div>
      </router-link>
      <div class="more-option image-container">
        <Avatar src="https://avatars1.githubusercontent.com/u/43508?s=400&v=4" />
      </div>
    </div>
    <div class="container">
      <div class="instance">

      </div>
    </div>
    <div class="factory">
      <div class="emoji-selector"><smile-icon /></div>
      <div class="writable">
        <input 
          type="text" 
          name="factorymsg" 
          placeholder="Type message here" 
          autocomplete="off" />
      </div>
      <div class="send-action"><send-icon /></div>
    </div>
  </section>
</template>

<script>
  import { ArrowLeftIcon, SmileIcon, SendIcon } from 'vue-feather-icons'
  import ActionIcon from '@/components/ActionIcon'
  import Avatar from '@/components/Avatar'
  import { routing } from '@/mixins'

  export default {
    name: 'chats', 
    mixins: [routing],
 
    components: {
      Avatar, 
      'arrow-left-icon': ArrowLeftIcon,
      'action-icon': ActionIcon,
      'smile-icon': SmileIcon,
      'send-icon': SendIcon
    }
  }
</script>

<style>
  .chats .topbar {
    padding: 8px var(--base-margin);
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--front-fg-minor-blur);
    box-shadow: 0 1px 3px var(--front-fg-minor-blur);
  }
  .chats .topbar .target-profile,
  .chats .topbar .more-option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .chats .topbar .target-profile .display-name h4 {
    padding: 2px 0;
  }
  .chats .topbar .more-option {
    padding: 0 8px;
  }
  .chats .topbar .more-option .avatar {
    width: 2.5em;
    height: 2.5em;
  }
  .chats .factory {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--front-fg-minor-blur);
    box-shadow: 0 -2px 8px var(--rear-minor-blur);
  }
  .chats .factory .emoji-selector,
  .chats .factory .send-action {
    display: inherit;
    padding: 8px;
  }
  .chats .factory .send-action {
    background-color: var(--pcolor);
    border-radius: 25px;  
    width: 1.6em;
    height: 1.6em;
    justify-content: center;
    align-items: center;
  }
  .chats .factory .send-action svg {
    width: 18px;
    height: 18px;
    stroke: var(--p-fr-color);
  }
  .chats .factory .writable input[name=factorymsg] {
    padding: 6px var(--base-margin);
    width: 85%;
    border-width: 1px;
    border-style: groove;
    border-color: transparent;
    border-radius: 25px;
    font-family: var(--sfont);
    font-size: 1.1em;
    background-color: var(--input-bg);
    color: var(--input-fg);
    outline: none;
  }
  .chats .factory .writable input[name=factorymsg]::placeholder {
    color: var(--input-fg-blur);
  }
  .chats .factory .writable input[name=factorymsg]:focus {
    background-color: transparent;
    border-color: var(--input-outline-color);
  }
</style>