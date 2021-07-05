<template>
  <CenterPageRow>
    <BaseCard max-width="500">
      <template #title>
        <span class="unselectable">Admin Sign Up</span>
      </template>
      <v-form
        v-model="formIsValid"
        @submit.prevent="signIn"
      >
        <v-alert
          type="info"
          dense
          text
          class="unselectable"
        >
          If you are a student or teacher, please contact your school admin to create an account for you
        </v-alert>
        <SchoolNameField
          v-model="name"
          autofocus
        />
        <SchoolCodeField v-model="code" />
        <PasswordField v-model="password" />
      </v-form>
      <template #actions>
        <v-btn
          color="primary"
          outlined
          class="text-button font-weight-bold"
          :disabled="!formIsValid"
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
}
</script>
