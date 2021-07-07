<template>
  <v-app-bar app>
    <v-toolbar-title class="ml-4">
      <nuxt-link
        to="/"
        class="text-decoration-none text-h4 font-weight-bold unselectable"
      >
        <span class="primary--text">Kind</span><span class="accent--text">ly</span>
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer />
    <v-app-bar-nav-icon
      v-show="isMobile"
      class="mr-1"
      @click="$emit('show-navigation')"
    />
    <v-toolbar-items v-show="!isMobile">
      <v-btn
        v-for="(link, i) in links"
        :key="`link-${i}`"
        plain
        class="text-button font-weight-bold"
        :to="link.to"
        :color="link.color"
      >
        <v-icon left>
          mdi-{{ link.icon }}
        </v-icon>
        <v-badge
          v-if="link.text === 'Profile'"
          color="primary"
          :content="3"
          :value="3"
          inline
        >
          {{ link.text }}
        </v-badge>
        <span v-else>{{ link.text }}</span>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import links from '~/assets/data/navigationLinks'

export default {
  data: vm => ({
    links,
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
    },
  },
}
</script>
