<template>
  <v-text-field
    ref="field"
    label="School Name"
    outlined
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
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  data: vm => ({
    rules: [
      required,
    ],
  }),
  mounted() {
    if (this.autofocus) {
      this.$refs.field.focus()
    }
  },
}
</script>
