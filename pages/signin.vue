<template>
  <CenterPageRow>
    <BaseCard>
      <template #title>
        <span class="unselectable">{{ role }} Sign In</span>
      </template>
      <v-form
        v-model="formIsValid"
        @submit.prevent
      >
        <SchoolCodeField
          v-model="code"
          autofocus
          @submit="signIn"
        />
        <UsernameField
          v-model="username"
          @submit="signIn"
        />
        <PasswordField
          v-model="password"
          @submit="signIn"
        />
        <v-row
          no-gutters
          justify="center"
          class="mb-4"
        >
          <a
            class="unselectable"
            @click.stop="roleIndex = previousRoleIndex"
          >{{ previousRole }} Sign In</a>
          <v-spacer />
          <a
            class="unselectable"
            @click.stop="roleIndex = nextRoleIndex"
          >{{ nextRole }} Sign In</a>
        </v-row>
      </v-form>
      <template #actions>
        <v-btn
          color="primary"
          outlined
          class="text-button font-weight-bold"
          :disabled="!formIsValid"
          @click="signIn"
        >
          <v-icon left>
            mdi-login-variant
          </v-icon>
          Sign In
        </v-btn>
      </template>
    </BaseCard>
  </CenterPageRow>
</template>

<script>
import roles from '~/assets/data/roles'
import capitalize from '~/assets/methods/capitalize'

export default {
  data: vm => ({
    formIsValid: false,
    code: '',
    username: '',
    password: '',
    roles,
    roleIndex: 0,
  }),
  head: vm => ({
    title: 'Sign In',
  }),
  computed: {
    role() {
      return capitalize(this.roles[this.roleIndex])
    },
    previousRole() {
      return capitalize(this.roles[this.previousRoleIndex])
    },
    nextRole() {
      return capitalize(this.roles[this.nextRoleIndex])
    },
    previousRoleIndex() {
      let index = this.roleIndex - 1
      if (index < 0) { index = this.roles.length - 1 }
      return index
    },
    nextRoleIndex() {
      let index = this.roleIndex + 1
      if (index >= this.roles.length) { index = 0 }
      return index
    },
  },
  methods: {
    signIn() {
      // if (!this.formIsValid) { return }
      
    },
  },
}
</script>
