<template>
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
</template>

<script>
export default {
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
