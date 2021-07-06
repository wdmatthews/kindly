<template>
  <v-alert
    text
    class="unselectable"
    :color="color"
  >
    <v-row
      no-gutters
      align="center"
    >
      <v-icon
        left
        :color="color"
      >
        mdi-{{ icon }}
      </v-icon>
      <v-col>
        <span>
          <slot />
        </span>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>
