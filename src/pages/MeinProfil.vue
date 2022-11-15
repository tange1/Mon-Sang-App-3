<template>
  <q-header elevated>
    <q-toolbar>
      <q-item to="/home" clickable>
        <q-btn flat dense round icon="arrow_back" aria-label="Menu" />
      </q-item>

      <q-toolbar-title> Mon Sang App </q-toolbar-title>

      <div class="q-pa-md q-gutter-sm">
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
  <q-page padding>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <!--q-toggle v-model="dense" label="Dense QInput" /-->

        <h5>Personalien</h5>
        <q-input
          v-model="text"
          label="Nachname"
          disable
          :dense="dense"
        ></q-input>
        <q-input v-model="text" label="Vorname" :dense="dense"></q-input>
        <q-input v-model="text" label="Geburtsname" :dense="dense"></q-input>
        <q-input v-model="text" label="Geburtsdatum" :dense="dense"></q-input>
        <q-input v-model="text" label="Geschlecht" :dense="dense"></q-input>
        <q-input v-model="text" label="Beruf" :dense="dense"></q-input>

        <q-input v-model="text" label="Strasse" :dense="dense"></q-input>
        <q-input v-model="text" label="Nummer" :dense="dense"></q-input>
        <q-input v-model="text" label="Postleitzahl" :dense="dense"></q-input>
        <q-input v-model="text" label="Ort" :dense="dense"></q-input>
        <q-input v-model="text" label="Telefon Privat" :dense="dense"></q-input>
        <q-input
          v-model="text"
          label="Telefon Geschäft"
          :dense="dense"
        ></q-input>
        <q-input v-model="text" label="Telefon Mobil" :dense="dense"></q-input>
        <q-input v-model="text" label="E-Mail" :dense="dense"></q-input>
        <!--q-input v-model="text" label="Körpergewicht" :dense="dense"></q-input-->
        <!--q-input v-model="text" label="Grösse" :dense="dense"></q-input-->

        <h5>Blutgruppe</h5>
        <q-input
          v-model="text"
          label="Deine Blutgruppe"
          disable
          :dense="dense"
        ></q-input>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(true),
    };
  },
});
</script>
