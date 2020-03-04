<template>
  <div class="peoples">
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
    <div class="data-list">
      <router-link 
        tag="div" 
        to="/users" 
        class="person"
        v-for="(person, index) in datalist" 
        :key="index">
        <avatar :src="person.photoURL" :uname="person.displayName" />
        <div class="detail">
          <h4>{{ person.displayName }}</h4>
          <p><small>{{ person.email }}</small></p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { ArrowLeftIcon } from 'vue-feather-icons'
  import ActionIcon from '@/components/ActionIcon'
  import router from '@/router'
  import Avatar from '@/components/Avatar'
  import { firestore } from '../firebase-init'

  export default {
    name: 'peoples',

    components: {
      'arrow-left-icon': ArrowLeftIcon,
      'action-icon': ActionIcon,
      'avatar': Avatar
    },
    data() {
      return {
        datalist: []
      }
    },
    created() {
      firestore.collection('userdata').get().then(snapshot => {
        const { docs } = snapshot;
        docs.forEach(doc => {
          this.datalist.push(doc.data());
        })
      });
    },
    methods: {
      back() {
        router.back();
      }
    }
  }
</script>

<style>
  .peoples .topbar {
    padding: 8px var(--base-margin);
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--front-fg-minor-blur);
    box-shadow: 0 1px 3px var(--front-fg-minor-blur);
  }
  .peoples .data-list .person {
    display: flex;
    align-items: center;
    padding: 12px 1em;
  }
  .peoples .data-list .person .detail {
    padding: 0 12px;
  }
  .peoples .data-list .person .detail h4 {
    margin: 0;
    padding: 1px;
  }
  .peoples .data-list .person p {
    margin: 0;
    padding: 1px;
  }
  .peoples .data-list .person .avatar {
    width: 3.3em;
    height: 3.3em;
  }
</style>