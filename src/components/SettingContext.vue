<template>
  <div class="setting-context">
    <div class="action-label">
      <big>{{ label }}</big>
    </div>
    <div class="action-controller">
      <label v-if="controller" class="toggle-switch">
        <input type="checkbox" @change="isset" />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'setting-context', 

    props: {
      label: {
        required: true,
        type: String
      },
      controller: {
        required: false,
        type: String
      },
    },
    methods: {
      isset(ev) {
        this.$emit('oncheck', ev);
      }
    }
  }
</script>

<style>
  .setting-context {
    display: flex;
    justify-content: space-between;
    padding: 2px var(--base-margin);
  }
  .setting-context .action-label {
    padding: 8px;
  }

  .setting-context .action-controller .toggle-switch {
    position: relative;
    display: inline-block;
    width: 55px;
    height: 30px;
    -webkit-tap-highlight-color: transparent;
  }
  .setting-context .action-controller .toggle-switch input[type='checkbox'] {
    opacity: 0;
    width: 0;
    height: 0;
    -webkit-tap-highlight-color: inherit;
  }
  .setting-context .action-controller .toggle-switch .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 34px;
    background-color: #ccc;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
  .setting-context .action-controller .toggle-switch .slider::before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
  .setting-context .action-controller .toggle-switch input[type='checkbox']:checked + .slider {
    background-color: var(--pcolor);
  }
  .setting-context .action-controller .toggle-switch input[type='checkbox']:focus + .slider {
    box-shadow: 0 0 1px var(--pcolor);
  }
  .setting-context .action-controller .toggle-switch input[type='checkbox']:checked + .slider::before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

</style>