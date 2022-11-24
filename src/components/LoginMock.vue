<template>
  <q-card class="login-card">
    <img
      class="horizontal-middle"
      alt="Mon Sang App logo"
      src="../assets/logo/logo.png"
    />
    <!-- Login -->
    <q-card-section class="card-title">Login</q-card-section>
    <template v-if="code === ''">
      <q-card-section class="login-text">
        <!-- Willkommen zum Gesundheitsfachpersonen-Bereich des EPD... -->
        <p>Willkommen in der Mon Sang App</p>
        <!-- Loggen Sie sich mit Ihrer EPD-UC eID ein, um auf die Dossiers... -->
        <p>Melde dich mit deiner E-Mailadresse und Passwort an.</p>
        <!-- E-Mail und Passwort -->
        <form id="login-form">
          <!-- E-Mail eingeben -->
          <q-input v-model="eId" label="Email" type="email" />
          <!-- Passwort eingeben -->
          <q-input v-model="password" label="Password" type="password" />
          <q-btn
            class="bottom-center"
            id="login-button"
            @click="login"
            type="submit"
            label="Anmelden"
            :disable="password === '' || eId === ''"
          />
        </form>

        <!-- Falls Passwort falsch -->
        <p v-if="invalidPassword" class="warning">Falsches Passwort</p>
      </q-card-section>
    </template>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { LoginType, UIMessage } from '../model/interfaces';

// Mocks the login to the platform with a token displayed in the UI.
export default defineComponent({
  name: 'LoginMock',
  data() {
    return {
      code: '',
      codeInput: '',
      eId: '',
      password: '',
      user: {
        username: '',
        phone: '',
        password: '',
        familyName: '',
        givenName: '',
      } as LoginType,
      invalidPassword: false,
      invalidCode: false,
    };
  },

  emits: {
    /**
     * Notify parent component about token message to display.
     * Emitted when mocked message for 2FA is "sent".
     */
    message: (payload: UIMessage) => {
      return payload.type === 'sms' && payload.title && payload.text;
    },
  },
  props: {
    // Accepted username, password combinations for login.
    acceptedLogins: {
      type: Array as PropType<Array<LoginType>>,
      required: true,
    },

    // Function that returns user that was logged in.
    onLogin: {
      type: Function as PropType<(user: LoginType) => void>,
      required: false,
    },
  },
  methods: {
    // Login
    login() {
      const login = this.$props.acceptedLogins.find(
        (login) => login.username === this.eId
      );
      if (login && login.password === this.password) {
        this.user = login;
        if (this.$props.onLogin) {
          this.$props.onLogin(this.user);
        }
      } else {
        this.invalidPassword = true;
      }
    },
    checkCode(e: Event) {
      e.preventDefault();
      if (this.code === this.codeInput) {
        if (this.$props.onLogin) {
          this.$props.onLogin(this.user);
        }
      } else {
        this.invalidCode = true;
      }
    },
  },
  watch: {
    eID(n: string, o: string): void {
      this.invalidPassword = n === o;
    },
    password(n: string, o: string): void {
      this.invalidPassword = n === o;
    },
  },
});
</script>
