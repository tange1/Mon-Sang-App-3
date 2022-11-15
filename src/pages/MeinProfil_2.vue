<template>
  <q-page padding>
    <div>
      <q-splitter v-model="splitterModel" style="height: 690px">
        <template v-slot:before>
          <q-tabs v-model="tab" vertical>
            <q-tab name="personalien" icon="person" label="Personalien" />
            <q-tab name="blutgruppe" icon="bloodtype" label="Blutgruppe" />
            <q-tab name="historie" icon="history" label="Historie" />
            <q-tab name="einstellungen" icon="settings" label="Einstellungen" />
            <q-tab name="ueberDieApp" icon="smartphone" label="Über die App" />
            <q-tab name="datenschutz" icon="lock" label="Datenschutz" />
            <q-tab name="impressum" icon="gavel" label="Impressum" />
            <q-tab name="version" icon="exit_to_app" label="Version" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <!--Tab: Personalien-->
            <q-tab-panel name="personalien">
              <div class="text-h5 q-mb-md">Deine Personalien</div>
              <p>Vorname</p>
              <p>Geburtsname</p>
              <p>Geburtsdatum</p>
              <p>Geschlecht</p>
              <p>Beruf</p>
              <p>Privatadresse</p>
              <p>Strasse</p>
              <p>Strassennummer</p>
              <p>Postleitzahl</p>
              <p>Ort</p>
              <p>Telefon P</p>
              <p>Mobil</p>
              <p>Telefon G</p>
              <p>E-Mail</p>
            </q-tab-panel>

            <!--Tab: Blutgruppe-->
            <q-tab-panel name="blutgruppe">
              <div class="text-h5 q-mb-md">Deine Blutgruppe</div>
              <p>Deine Blutgruppe ist 0 positiv</p>
            </q-tab-panel>

            <!--Tab: Blutspende-Historie-->
            <q-tab-panel name="historie">
              <div class="text-h5 q-mb-md">Deine Blutspende-Historie</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <!--Tab: Einstellungen-->
            <q-tab-panel name="einstellungen">
              <div class="text-h5 q-mb-md">Einstellungen</div>
              <p>Benachrichtige mich wenn ...</p>
              <div>
                <q-toggle
                  v-model="value"
                  label="ich seit der letzten Spende wieder spenden darf."
                  left-label
                />
              </div>
              <div>
                <q-toggle
                  v-model="value"
                  label="der Bestand zu meiner Blutgruppe niedrig ist."
                  left-label
                />
              </div>
              <div>
                <q-toggle
                  v-model="value"
                  label="Ein Blutspende-Event in der Nähe statt finden wird."
                  left-label
                />
              </div>
            </q-tab-panel>

            <!--Tab: Über die App-->
            <q-tab-panel name="ueberDieApp">
              <div class="text-h5 q-mb-md">Über die App</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <!--Tab: Datenschutz-->
            <q-tab-panel name="datenschutz">
              <div class="text-h5 q-mb-md">Datenschutz</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <!--Tab: Über die App-->
            <q-tab-panel name="impressum">
              <div class="text-h5 q-mb-md">Impressum</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <!--Tab: Version-->
            <q-tab-panel name="version">
              <div class="text-h5 q-mb-md">Version</div>
              <p>Version 0.1</p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
      tab: ref('personalien'),
      splitterModel: ref('20'),
      value: ref(true),
    };
  },
});
</script>
