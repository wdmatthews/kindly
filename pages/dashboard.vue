<template>
  <div class="pa-4">
    <v-row
      no-gutters
      class="ma-n2"
    >
      <v-col
        v-for="course in courses"
        :key="`course-${course.id}`"
        cols="12"
        md="4"
        class="pa-2"
      >
        <BaseCard>
          <template #title>
            <span class="unselectable">{{ course.name }}</span>
          </template>
          <v-row
            no-gutters
            align="center"
            class="mb-4 unselectable"
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
          <template #actions>
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import getGradeColor from '~/assets/methods/getGradeColor'
import getGradeMessage from '~/assets/methods/getGradeMessage'

export default {
  data: vm => ({
    courses: [
      {
        id: '1',
        name: 'Course 1',
        completion: 90,
        grade: 80,
      },
      {
        id: '2',
        name: 'Course 2',
        completion: 50,
        grade: 70,
      },
      {
        id: '3',
        name: 'Course 3',
        completion: 30,
        grade: 60,
      },
      {
        id: '4',
        name: 'Course 4',
        completion: 70,
        grade: 85,
      },
      {
        id: '5',
        name: 'Course 5',
        completion: 20,
        grade: 45,
      },
    ],
  }),
  head: vm => ({
    title: 'Dashboard',
  }),
  methods: {
    getGradeColor,
    getGradeMessage,
  },
}
</script>
