<template>
  <!--q-header elevated> </q-header-->
  <q-page padding>
    <div class="row">
      <div class="col-6">
        <q-card class="link-card" @click="$router.push('/testpage')">
          <q-card-section class="card-title"
            >Wichtig vor der Blutspende</q-card-section
          >
          <q-icon name="fas fa-users" class="big-icon" />

          <q-card-section>
            <p>Informationen zur Blutspende</p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-6">
        <q-card class="link-card" @click="$router.push('/testpage')">
          <q-card-section class="card-title"
            >Wichtig während der Blutspende</q-card-section
          >

          <q-icon name="fas fa-hospital-user" class="big-icon" />

          <q-card-section>
            <p>Informationen zur Blutspende</p>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="q-pa-md">
      <q-btn
        color="primary"
        class="full-width"
        label="Wichtig vor der Blutspende"
      />
      <p></p>
      <q-btn
        color="primary"
        class="full-width"
        label="Wichtig während der Blutspende"
      />
      <p></p>
      <q-btn
        color="primary"
        class="full-width"
        label="Wichtig nach der Blutspende"
      />
      <p></p>
      <q-btn
        color="primary"
        class="full-width"
        label="Weshalb sind wir auf deine Blutspende angewiesen"
      />
      <p></p>
      <q-btn
        color="primary"
        class="full-width"
        label="Erfahre mehr über die einzelnen Blutgruppen"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
});
</script>
