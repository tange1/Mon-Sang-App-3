<template>
  <q-page padding>
    <h5>Willkommen in der MonSang App</h5>
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          :name="1"
          img-src="../assets/pictures_blooddonation/Blutspende_1.webp"
        >
          <div class="text-h5 absolute-top text-left">
            Vorab-Check durchführen
          </div> </q-carousel-slide
        >/>
        <q-carousel-slide
          :name="2"
          img-src="../assets/pictures_blooddonation/Blutspende_2.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="../assets/pictures_blooddonation/Blutspende_3.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="../assets/pictures_blooddonation/Blutspende_4.jpg"
        />
      </q-carousel>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PageIndex',
  data(): {
    autoplay: boolean;
    slide: string;
  } {
    return {
      autoplay: true,
      slide: '1',
    };
  },
});
</script>
