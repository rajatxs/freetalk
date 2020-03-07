<template>
  <section class="userprofile">
    <div class="topbar">
      <div class="jump-previous-action" @click="back">
        <action-icon colored>
          <arrow-left-icon />
        </action-icon>
      </div>
    </div>
  </section>
</template>

<script>
  import ActionIcon from '@/components/ActionIcon'
  import { ArrowLeftIcon } from 'vue-feather-icons'
  import { routing } from '@/mixins'

  export default {
    name: 'user-profile',
    mixins: [routing],

    components: {
      'action-icon': ActionIcon,
      'arrow-left-icon': ArrowLeftIcon
    }
  }
</script>