<template>
  <q-page padding class="flex flex-center">
    <div class="column" style="height: 800px">
      <div class="col">
        <img
          class="logo"
          alt="Mon Sang App logo"
          src="../assets/logo/logo.png"
          style="width: 100px; height: 100px"
        />
        <div class="col">
          <h5>Mon Sang App</h5>
        </div>
        <div class="col">
          <h6>Spende Blut - Rette Leben!</h6>
        </div>
        <div class="col">
          <q-card class="auth-tabs">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="einloggen" label="Anmelden" />
              <q-tab name="registrieren" label="Registrieren" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="einloggen">
                <login-registrieren :tab="tab" />
              </q-tab-panel>
              <q-tab-panel name="registrieren">
                <login-registrieren :tab="tab" />
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      tab: 'registrieren',
    };
  },
  components: {
    'login-registrieren': require('components/LoginRegister.vue').default,
  },
};
</script>

<style>
.auth-tabs {
  max-width: 500px;
  margin: 0 auto;
}
.column {
  max-width: 500px;
  margin: 0 auto;
}
</style>
