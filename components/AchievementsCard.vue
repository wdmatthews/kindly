<template>
  <BaseCard>
    <template #title>
      <span class="unselectable">Achievements</span>
    </template>
    <v-list class="transparent my-n4">
      <v-list-item
        v-for="(achievement, i) in course.achievements"
        :key="`achievement-${i}`"
        class="px-0"
      >
        <v-list-item-content>
          <v-list-item-title v-text="achievement.name" />
          <v-list-item-subtitle v-text="achievement.description" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </BaseCard>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
