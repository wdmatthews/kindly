<template>
  <BaseCard>
    <template #title>
      <span class="unselectable">{{ course.name }}</span>
    </template>
    <v-row
      no-gutters
      align="center"
      :class="{ 'mb-4': viewButton, unselectable: true }"
    >
      <v-progress-circular
        class="mr-4"
        :rotate="-90"
        :size="128"
        :width="16"
        :value="course.completion"
        :color="getGradeColor(course.grade).name"
      >
        <span class="text-h5 font-weight-bold">{{ course.grade.toFixed(2) }}%</span>
      </v-progress-circular>
      <v-col>
        {{ getGradeMessage(course.grade) }}<br>
        You have completed {{ course.completion.toFixed(2) }}% of the available assignments<br>
        Your grade is {{ course.grade.toFixed(2) }}%
      </v-col>
    </v-row>
    <template
      v-if="viewButton"
      #actions
    >
      <v-btn
        color="primary"
        outlined
        class="text-button font-weight-bold"
        :to="`/course?id=${course.id}`"
      >
        <v-icon left>
          mdi-eye
        </v-icon>
        View
      </v-btn>
    </template>
  </BaseCard>
</template>

<script>
import getGradeColor from '~/assets/methods/getGradeColor'

export default {
  props: {
    course: {
      type: Object,
      default: () => {},
    },
    viewButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getGradeColor,
    getGradeMessage() {
      if (Math.fround(this.course.grade) === 80 || this.course.grade > 80) { return 'You are doing awesome!' }
      if (Math.fround(this.course.grade) === 70 || this.course.grade > 70) { return 'You are so close, keep it up!' }
      return 'I believe in you, keep trying!'
    },
  },
}
</script>
