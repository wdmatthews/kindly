<template>
  <v-row
    no-gutters
    class="mx-n2"
  >
    <v-col
      cols="12"
      md="4"
      class="px-md-2"
    >
      <v-select
        v-model="adjective"
        label="Adjective"
        outlined
        :items="adjectives"
        :rules="rules"
      />
    </v-col>
    <v-col
      cols="12"
      md="4"
      class="px-md-2"
    >
      <v-select
        v-model="color"
        label="Color"
        outlined
        :items="colors"
        :rules="rules"
      />
    </v-col>
    <v-col
      cols="12"
      md="4"
      class="px-md-2"
    >
      <v-select
        v-model="animal"
        label="Animal"
        outlined
        :items="animals"
        :rules="rules"
      />
    </v-col>
  </v-row>
</template>

<script>
import required from '~/assets/validation/required.js'
import { adjectives, colors, animals } from '~/assets/data/nicknameOptions.js'

export default {
  data: vm => ({
    rules: [
      required,
    ],
    adjective: '',
    color: '',
    animal: '',
    adjectives,
    colors,
    animals,
  }),
  computed: {
    nickname() {
      return `${this.adjective} ${this.color} ${this.animal}`
    },
  },
}
</script>
