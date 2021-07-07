<template>
  <BaseCard>
    <template #title>
      <span class="unselectable">Leaderboard</span>
    </template>
    <p class="unselectable mb-2">
      Your average grade change is
      {{ getAverageTrend(course.assignments).toFixed(2) }}%
    </p>
    <v-list class="transparent my-n4">
      <v-list-item
        v-for="(rank, i) in course.leaderboard"
        :key="`rank-${i}`"
        class="px-0"
      >
        <v-list-item-icon>
          <v-icon v-text="`mdi-numeric-${i + 1}-circle`" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <span class="header-font font-weight-bold">{{ rank.averageTrend }}%</span>
            {{ rank.names.join(', ') }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </BaseCard>
</template>

<script>
import getAverageTrend from '~/assets/methods/getAverageTrend'

export default {
  props: {
    course: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getAverageTrend,
  },
}
</script>
