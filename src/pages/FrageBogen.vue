<template>
  <p class="questionnaire">Das ist ein Page zum Testen</p>

  <div v-if="qData !== undefined">
    <QuestionComponent
      v-for="question in qData.getQuestions()"
      :key="question.id"
      :question="question"
      :language="lang"
      :onAnswer="qData.updateQuestionAnswers"
      :isSelected="qData.isAnswerOptionSelected"
    />
  </div>
  <button :disabled="!qData" @click="qData?.resetResponse()">
    zurücksetzen
  </button>
  <button @click="setAnswers">Antworten speichern</button>

  <!-- RESPONSE MODAL-->
  <div v-if="response" class="modal" id="response-modal">
    <p>Hier ist die QuestionnaireResponse-Resource:</p>
    <textarea v-model="response"></textarea>
    <button @click="response = undefined">schliessen</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuestionComponent from '../components/Question.vue';
import NEUSPENDER from '../assets/questionnaires/neuspender.json';
import { Questionnaire, QuestionnaireResponse } from '@i4mi/fhir_r4';
import { QuestionnaireData } from '@i4mi/fhir_questionnaire';

export default defineComponent({
  name: 'App',
  components: { QuestionComponent },
  data() {
    return {
      lang: 'de',
      qData: new QuestionnaireData(NEUSPENDER as Questionnaire, ['de']),
      response: undefined as string | undefined,
    };
  },

  methods: {
    setAnswers(): void {
      if (!this.qData) return;
      try {
        this.response = JSON.stringify(
          this.qData.getQuestionnaireResponse(this.lang, {
            reset: false,
            includeID: true,
          }),
          null,
          2
        );
      } catch (error) {
        console.log('Es ging etwas schief beim Questionnaire speichern', error);
      }
    },
  },
});
</script>

<style></style>
