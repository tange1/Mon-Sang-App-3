<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Mon Sang App </q-toolbar-title>

        <div v-if="user.givenName" @click="logout">
          {{
            (user.prefix ? user.prefix : '') +
            ' ' +
            user.givenName +
            ' ' +
            user.familyName
          }}
          <q-icon name="fas fa-user-md" id="user-icon" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>Titel</q-item-label>
        <q-item v-for="entry in menuEntries" :key="entry.to">
          <q-icon
            v-if="entry.icon"
            :name="'fas fa-' + entry.icon"
            class="menu-icon"
          />
          <router-link :to="entry.to" class="menu-link">Links</router-link>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!--div class="q-pa-md q-gutter-sm">
          <q-avatar size="60px">
            <img
              class="logo"
              alt="Mon Sang App logo"
              src="../assets/logo/logo.png"
              style="width: 60px; height: 60px"
            />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <q-item to="/home" clickable>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption> Beispieltext </q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/meinprofil" clickable>
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Mein Profil</q-item-label>
            <q-item-label caption> Beispieltext </q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/fragebogen" clickable>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Fragebogen</q-item-label>
            <q-item-label caption> Fragebogen vor der Spende </q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/terminvereinbarung" clickable>
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Termin vereinbaren</q-item-label>
            <q-item-label caption> Beispieltext </q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/blutgruppenbarometer" clickable>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Blutgruppen-Barometer</q-item-label>
            <q-item-label caption> Fragebogen vor der Spende </q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/fragenundantworten" clickable>
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Fragen und Antworten</q-item-label>
            <q-item-label caption> Beispieltext </q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Einstellungen" clickable>
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Einstellungen</q-item-label>
            <q-item-label caption> Beispieltext </q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/datenschutz" clickable>
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Datenschutz</q-item-label>
            <q-item-label caption> Beispieltext </q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/ueberdieapp" clickable>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Über die App</q-item-label>
            <q-item-label caption> Beispieltext </q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/testpage" clickable>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Page zum Testen</q-item-label>
            <q-item-label caption> Beispieltext </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer-->

    <q-footer>
      <q-tabs>
        <q-route-tab to="/home" icon="home" label="" />
        <q-route-tab to="/spendeblut" icon="gas_meter" label="" />
        <q-route-tab to="/informationen" icon="info" label="" />
        <q-route-tab to="/meinprofil" icon="person" label="" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
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
          icon: 'home',
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
      if (confirm('Möchten Sie sich wirklich ausloggen?')) {
        this.$store.resetSession();
        location.reload();
      }
    },
  },
  /**
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  */
});
</script>

<style></style>
