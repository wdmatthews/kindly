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
        <CourseCard
          view-button
          :course="course"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
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
}
</script>
