<template>
  <v-text-field
    label="School"
    outlined
    prepend-icon="mdi-school"
    :rules="rules"
    :value="value"
    @input="$emit('input', $event)"
  />
</template>

<script>
import required from '~/assets/validation/required.js'

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data: vm => ({
    rules: [
      required,
    ],
  }),
}
</script>
