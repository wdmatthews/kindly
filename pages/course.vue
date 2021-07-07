<template>
  <div>
    <v-tabs
      v-model="tab"
      centered
    >
      <v-tab class="text-button font-weight-bold">
        <v-icon left>
          mdi-chart-line
        </v-icon>
        Grades
      </v-tab>
      <v-tab class="text-button font-weight-bold">
        <v-icon left>
          mdi-podium
        </v-icon>
        Leaderboard
      </v-tab>
    </v-tabs>
    <v-tabs-items
      v-model="tab"
      class="transparent"
    >
      <v-tab-item>
        <div class="pa-4">
          <v-row
            no-gutters
            justify="center"
            class="ma-n2"
          >
            <v-col
              cols="12"
              md="4"
              class="pa-2"
            >
              <CourseCard :course="course" />
            </v-col>
            <v-col
              cols="12"
              md="4"
              class="pa-2"
            >
              <TrendCard :course="course" />
            </v-col>
            <v-col
              cols="12"
              md="8"
              class="pa-2"
            >
              <BaseCard>
                <template #title>
                  <span class="unselectable">Grades</span>
                </template>
                <v-data-table
                  disable-sort
                  hide-default-footer
                  mobile-breakpoint="0"
                  class="transparent"
                  :headers="gradeHeaders"
                  :items="course.assignments"
                  :items-per-page="-1"
                >
                  <!-- eslint-disable-next-line vue/valid-v-slot -->
                  <template #item.date="{ item }">
                    {{ formatDate(item.date) }}
                  </template>
                  <!-- eslint-disable-next-line vue/valid-v-slot -->
                  <template #item.grade="{ item }">
                    <span :class="`${getGradeColor(item.grade).name}--text header-font`">{{ item.grade.toFixed(2) }}%</span>
                  </template>
                </v-data-table>
              </BaseCard>
            </v-col>
          </v-row>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="pa-4">
          <v-row
            no-gutters
            justify="center"
            class="ma-n2"
          >
            <v-col
              cols="12"
              md="4"
              class="pa-2"
            >
              <LeaderboardCard :course="course" />
            </v-col>
            <v-col
              cols="12"
              md="4"
              class="pa-2"
            >
              <AchievementsCard :course="course" />
            </v-col>
          </v-row>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import gradeHeaders from '~/assets/data/gradeHeaders'
import getGradeColor from '~/assets/methods/getGradeColor'
import formatDate from '~/assets/methods/formatDate'

export default {
  data: vm => ({
    course: {
      id: '1',
      name: 'Course Name',
      completion: 90,
      grade: 80,
      assignments: [
        {
          name: '1',
          date: new Date(),
          grade: 100,
        },
        {
          name: '2',
          date: new Date(),
          grade: 70,
        },
        {
          name: '3',
          date: new Date(),
          grade: 80,
        },
        {
          name: '4',
          date: new Date(),
          grade: 95,
        },
      ],
      leaderboard: [
        {
          averageTrend: 20,
          names: ['Nickname 1', 'Nickname 2'],
        },
        {
          averageTrend: 10,
          names: ['Nickname 3', 'Nickname 4'],
        },
        {
          averageTrend: 5,
          names: ['Nickname 5', 'Nickname 6'],
        },
      ],
      achievements: [
        {
          name: 'High grade streaks for all!',
          description: 'Everyone in your class has high grade streaks of 5 or higher',
        },
        {
          name: 'Average trends in the sky!',
          description: 'Several students in your class have positive average grade changes',
        },
      ],
    },
    tab: 0,
    gradeHeaders,
  }),
  head: vm => ({
    title: 'Course Name | Course',
  }),
  methods: {
    getGradeColor,
    formatDate,
  },
}
</script>
