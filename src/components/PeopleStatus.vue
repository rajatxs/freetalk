<template>
  <section class="people-status">
    <div class="self">
      <div class="instance">
        <Avatar 
          v-if="selfStatus" 
          src="https://lh3.googleusercontent.com/-vaJboiR2x5Y/XixVCi3Y_HI/AAAAAAAACUA/y0ikQ-olqwYMGEf2quJ3X-ojKYaiuLDlQCEwYBhgL/w140-h140-p/2020-01-25.jpg" 
          uname="Rajat" />
        <div class="ic" v-else>
          <plus-icon />
        </div>
      </div>
    </div>
    <div class="relate">
      <div class="instance image-container" v-for="(status, i) in relateStatus" v-bind:key="i">
        <Avatar v-bind:src="status.src" v-bind:uname="status.uname" />
      </div>
    </div>
  </section>
</template>

<script>
  import Avatar from './Avatar'
  import { PlusIcon } from 'vue-feather-icons'

  export default {
    name: 'people-status',
    components: {
      Avatar,
      'plus-icon': PlusIcon
    },

    data() {
      return {
        selfStatus: false,
        relateStatus: [
          {
            src: "https://avatars0.githubusercontent.com/u/1109982?s=400&v=4",
            uname: "Jonn Doe"
          },
          {
            src: "https://avatars3.githubusercontent.com/u/11299391?s=400&v=4",
            uname: "Sid"
          },
          {
            src: "https://avatars1.githubusercontent.com/u/1899599?s=400&v=4",
            uname: "Rukenshia"
          },
          {
            src: "https://avatars1.githubusercontent.com/u/4060535?s=400&v=4",
            uname: "Nick Goodall"
          },
          {
            src: "https://avatars2.githubusercontent.com/u/470577?s=400&v=4",
            uname: "Albert"
          },
          {
            src: "https://avatars1.githubusercontent.com/u/43508?s=400&v=4",
            uname: "Alessandro (Ale) Segala"
          },
          {
            src: "https://avatars3.githubusercontent.com/u/1312807?s=400&v=4",
            uname: "klaussner"
          }
        ]
      }
    }
  }
</script>

<style>
  .people-status {
    padding: 8px var(--base-margin);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: thin;
  }
  .people-status .instance {
    width: 4.4em;
    height: 4.4em;
    padding: 8px;
    border-radius: 50px;
  }
  .people-status .self {
    padding-right: 2px;
  }
  .people-status .self .instance .ic {
    height: inherit;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #CCC;
    border-radius: inherit;
    box-sizing: border-box;
    border: 3px dashed var(--front-fg-minor-blur);
  }
  .people-status .self .instance .ic:active {
    background-color: var(--front-fg-minor-blur);
  }
  .people-status .self .instance .ic svg {
    width: 2em;
    height: 2em;
    stroke: var(--pcolor);
    stroke-width: 2.5px;
  }
  .people-status .relate {
    display: flex;
  }
</style>