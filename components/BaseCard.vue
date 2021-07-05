<template>
  <v-card
    color="blue-grey darken-4"
    :max-width="maxWidth"
  >
    <v-card-title class="pa-4 text-h4 font-weight-bold">
      <v-spacer />
      <slot name="title" />
      <v-spacer />
    </v-card-title>
    <v-card-text class="px-4 py-0">
      <slot name="default" />
    </v-card-text>
    <v-card-actions class="px-4 pb-4 pt-0">
      <v-spacer />
      <slot name="actions" />
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: [Number, String],
      default: undefined,
    },
  },
}
</script>
