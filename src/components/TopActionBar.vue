<template>
  <div class="topbar">
    <div class="previous-page" @click="back">
      <action-icon colored>
        <arrow-left-icon />
      </action-icon>
    </div>
    <header>
      <h4>Peoples</h4>
    </header>
  </div>
</template>

<script>
  import { ArrowLeftIcon } from 'vue-feather-icons'
  import ActionIcon from '@/components/ActionIcon'
  import { routing } from '@/mixins'

  export default {
    name: 'top-action-bar',
    mixins: [routing],

    components: {
      'arrow-left-icon': ArrowLeftIcon,
      'action-icon': ActionIcon
    }
  }
</script>

<style>
  .topbar {
    padding: 8px var(--base-margin);
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--front-fg-minor-blur);
    box-shadow: 0 1px 3px var(--front-fg-minor-blur);
  }
</style>