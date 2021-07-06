<template>
  <CenterPageRow>
    <BaseCard max-width="500">
      <template #title>
        <span class="unselectable">Admin Sign Up</span>
      </template>
      <v-form
        v-model="formIsValid"
        @submit.prevent
      >
        <BaseAlert
          color="info"
          icon="information"
        >
          If you are a student or teacher, please contact your school admin to create an account for you
        </BaseAlert>
        <SchoolNameField
          v-model="name"
          autofocus
          @submit="signUp"
        />
        <SchoolCodeField
          v-model="code"
          @submit="signUp"
        />
        <PasswordField
          v-model="password"
          @submit="signUp"
        />
      </v-form>
      <template #actions>
        <v-btn
          color="primary"
          outlined
          class="text-button font-weight-bold"
          :disabled="!formIsValid"
          @click="signUp"
        >
          <v-icon left>
            mdi-account-plus
          </v-icon>
          Sign Up
        </v-btn>
      </template>
    </BaseCard>
  </CenterPageRow>
</template>

<script>
export default {
  data: vm => ({
    formIsValid: false,
    name: '',
    code: '',
    password: '',
  }),
  head: vm => ({
    title: 'Sign Up',
  }),
  methods: {
    signUp() {
      // if (!this.formIsValid) { return }
      
    },
  },
}
</script>
