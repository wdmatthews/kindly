<template>
  <CenterPageRow>
    <BaseCard max-width="500">
      <template #title>
        <span class="unselectable">Signed Out</span>
      </template>
      <p class="unselectable">
        You were signed out<br>
        If you want to sign back in, click "Sign In" below<br>
        Until then, goodbye and have a nice day!
      </p>
      <template #actions>
        <v-btn
          color="primary"
          outlined
          to="/signin"
          class="text-button font-weight-bold"
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
export default {
  head: vm => ({
    title: 'Sign Out',
  }),
  mounted() {
    
  },
}
</script>
