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
            class="text-button font-weight-bold"
            :class="link.color ? `${link.color}--text` : ''"
          >
            <v-badge
              v-if="link.text === 'Profile'"
              color="primary"
              :content="3"
              :value="3"
              inline
              class="mt-0"
            >
              {{ link.text }}
            </v-badge>
            <span v-else>{{ link.text }}</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import links from '~/assets/data/navigationLinks'

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
