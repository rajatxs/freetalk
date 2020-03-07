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
    <div class="container">
      <div class="data-list" v-if="datalist.length > 1">
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
      <div v-else-if="loadingStatus && datalist.length == 0" class="loader-cover">
        <loading-bar />
      </div>
      <div v-else class="data-empty-error">
        <div class="icon"><frown-icon /></div>
        <h4>No anyone found</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import { ArrowLeftIcon } from 'vue-feather-icons'
  import ActionIcon from '@/components/ActionIcon'
  import { routing } from '@/mixins'
  import Avatar from '@/components/Avatar'
  import { FrownIcon } from 'vue-feather-icons'
  import LoadingBar from '../components/LoadingBar'
  import { firestore } from '../firebase-init'

  export default {
    name: 'peoples',
    mixins: [routing],

    components: {
      'arrow-left-icon': ArrowLeftIcon,
      'action-icon': ActionIcon,
      'avatar': Avatar,
      'frown-icon': FrownIcon,
      'loading-bar': LoadingBar
    },
    data() {
      return {
        loadingStatus: true, 
        datalist: []
      }
    },
    created() {
      firestore.collection('userdata').get().then(snapshot => {
        const { docs } = snapshot;
        if (docs.length !== 0) {
          docs.forEach(doc => {
            this.datalist.push(doc.data());
          })
          this.loadingStatus = false;
        } else {
          this.loadingStatus = false;
        }
      }).catch(() => this.loadingStatus = false);
    }
  }
</script>

<style>
  .peoples {
    display: grid;
    grid-template-rows: 4.5em auto;
    height: inherit;
  }
  .peoples .topbar {
    padding: 8px var(--base-margin);
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--front-fg-minor-blur);
    box-shadow: 0 1px 3px var(--front-fg-minor-blur);
  }
  .peoples .container .data-list .person {
    display: flex;
    align-items: center;
    padding: 12px 1em;
  }
  .peoples .container .data-list .person .detail {
    padding: 0 12px;
  }
  .peoples .container .data-list .person .detail h4 {
    margin: 0;
    padding: 1px;
  }
  .peoples .container .data-list .person p {
    margin: 0;
    padding: 1px;
  }
  .peoples .container .data-list .person .avatar {
    width: 3.3em;
    height: 3.3em;
  }
</style>