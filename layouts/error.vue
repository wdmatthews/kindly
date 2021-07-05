<template>
  <v-app>
    <TheAppBar @show-navigation="$refs.navigationDrawer.show()" />
    <TheNavigationDrawer ref="navigationDrawer" />
    <v-main>
      <CenterPageRow>
        <BaseCard>
          <template #title>
            <span class="unselectable">Error {{ error.statusCode }}</span>
          </template>
          <div class="unselectable text-center">
            <p>Oh no! There was an error!</p>
            <nuxt-link
              to="/"
              class="text-decoration-none"
            >
              Home
            </nuxt-link>
          </div>
        </BaseCard>
      </CenterPageRow>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head: vm => ({
    title: `Error ${vm.error.statusCode}`,
  }),
}
</script>
