<template>
  <v-text-field
    label="Username"
    outlined
    :rules="rules"
    :value="value"
    @input="$emit('input', $event)"
    @keyup.enter="$emit('submit')"
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
