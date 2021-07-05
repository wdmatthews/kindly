<template>
  <div class="px-4 pt-4">
    <h1 class="mb-4 text-h4">
      Landing Page
    </h1>
    <div style="font-size: 0;">
      <v-btn
        color="primary"
        outlined
        class="mr-4 text-button"
      >
        Primary
      </v-btn>
      <v-btn
        color="accent"
        outlined
        class="mr-4 text-button"
      >
        Accent
      </v-btn>
      <v-btn
        color="secondary"
        outlined
        class="text-button"
      >
        Secondary
      </v-btn>
    </div>
    <v-alert
      type="info"
      class="mt-4"
    >
      Info
    </v-alert>
    <v-alert type="success">
      Success
    </v-alert>
    <v-alert type="warning">
      Warning
    </v-alert>
    <v-alert type="error">
      Error
    </v-alert>
  </div>
</template>
