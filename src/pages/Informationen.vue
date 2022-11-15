<template>
  <q-header elevated> </q-header>
  <q-page padding>
    <div class="q-pa-md">
      <q-btn color="black" class="full-width" label="Full-width" />
      <q-btn color="primary" label="With Tooltip" class="q-mt-md">
        <q-tooltip class="bg-accent">I'm a tooltip</q-tooltip>
      </q-btn>
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
