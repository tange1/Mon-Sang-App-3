<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Mon Sang App </q-toolbar-title>

        <div v-if="user.givenName" @click="logout">
          Logout
          <q-icon name="fas fa-user-md" id="user-icon" />
        </div>
        <!--div v-if="user.givenName" @click="logout">
          {{ (user.prefix ? user.prefix : '') +
            ' ' + user.givenName +
            ' ' + user.familyName }}
          <q-icon name="fas fa-user-md" id="user-icon" />
        </div-->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>Titel</q-item-label>
        <q-item v-for="entry in menuEntries" :key="entry.to">
          <q-icon v-if="entry.icon" :name="'fas fa-' + entry.icon" class="menu-icon" />
          <router-link :to="entry.to" class="menu-link">Links</router-link>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs class="bg-primary text-white shadow-2">
        <q-route-tab to="/home" icon="home" label="Home" />
        <q-route-tab to="/spenden" icon="gas_meter" label="Spenden" />
        <q-route-tab to="/informationen" icon="info" label="Info" />
        <q-route-tab to="/meinprofil_2" icon="person" label="Profil" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LoginType } from 'src/model/interfaces';

interface MenuEntry {
  to: string;
  translateString: string;
  icon?: string;
}

export default defineComponent({
  name: 'MainLayout',
  components: {},
  data() {
    return {
      leftDrawerOpen: false,
      user: {} as LoginType,
      menuEntries: [
        {
          to: '/',
          translateString: 'home',
          icon: '',
        },
        {
          to: '/meinprofil',
          translateString: 'Mein_profil',
          icon: 'users',
        },
        {
          to: '/testpage',
          translateString: 'testpage',
          icon: 'hospital-user',
        },
      ] as MenuEntry[],
    };
  },
  mounted() {
    this.user = this.$store.getUser() || ({} as LoginType);
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    logout() {
      if (confirm('M??chten Sie sich wirklich ausloggen?')) {
        this.$store.logoutUser();
        location.reload();
      }
    },
  },
});
</script>

<style>

</style>
