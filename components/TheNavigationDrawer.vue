<template>
  <v-navigation-drawer
    v-model="isVisible"
    app
    temporary
    right
  >
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="(link, i) in links"
        :key="`link-${i}`"
        :to="link.to"
        :color="link.color"
      >
        <v-list-item-icon>
          <v-icon
            :color="link.color"
            v-text="`mdi-${link.icon}`"
          />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            class="text-button"
            :class="link.color ? `${link.color}--text` : ''"
            v-text="link.text"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import links from '~/assets/data/navigation-links.js'

export default {
  data: vm => ({
    isVisible: false,
    links,
  }),
  methods: {
    show() {
      this.isVisible = true
    },
  },
}
</script>
