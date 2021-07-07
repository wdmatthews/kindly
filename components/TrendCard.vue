<template>
  <BaseCard>
    <template #title>
      <span class="unselectable">Trends</span>
    </template>
    <p class="unselectable">
      The average change between each of your grades is
      <span :class="`${averageTrendColor}--text`">
        {{ averageTrend.toFixed(2) }}%
      </span>
      <br>{{ averageTrendMessage }}
    </p>
    <p class="unselectable">
      Your past {{ streakTrend }} grades are 80% or higher<br>
      {{ streakTrendMessage }}
    </p>
    <p class="unselectable">
      You have {{ highScoreTrend }} grades that are 80% or higher<br>
      {{ highScoreTrendMessage }}
    </p>
    <BaseChart
      type="line"
      :width="200"
      :height="100"
      :labels="chartLabels"
      :datasets="[
        {
          label: 'Grade',
          data: chartData,
          backgroundColor: chartColors,
        },
      ]"
      :options="trendChartOptions"
    />
  </BaseCard>
</template>

<script>
import trendChartOptions from '~/assets/data/trend-chart-options'
import getGradeColor from '~/assets/methods/getGradeColor'
import getAverageTrend from '~/assets/methods/getAverageTrend'

export default {
  props: {
    course: {
      type: Object,
      default: () => {},
    },
  },
  data: vm => ({
    trendChartOptions,
  }),
  computed: {
    chartLabels() {
      return this.course.assignments.reduce((labels, assignment) => {
        labels.push(assignment.name)
        return labels
      }, [])
    },
    chartData() {
      return this.course.assignments.reduce((data, assignment) => {
        data.push(assignment.grade)
        return data
      }, [])
    },
    chartColors() {
      return this.course.assignments.reduce((colors, assignment) => {
        colors.push(this.getGradeColor(assignment.grade).hex)
        return colors
      }, [])
    },
    averageTrend() {
      return this.getAverageTrend(this.course.assignments)
    },
    averageTrendColor() {
      return Math.fround(this.averageTrend) === 0 || this.averageTrend > 0 ? 'success' : 'error'
    },
    averageTrendMessage() {
      if (this.averageTrend > 0) { return 'Well done, keep it up!' }
      if (Math.fround(this.averageTrend) === 0) { return '' }
      return 'I believe in you, your next grade can increase this!'
    },
    streakTrend() {
      let streak = 0
      for (let i = this.course.assignments.length - 1; i >= 0; i--) {
        const assignment = this.course.assignments[i]
        if (Math.fround(assignment.grade) !== 80 && assignment.grade < 80) { break }
        streak++
      }
      return streak
    },
    streakTrendMessage() {
      if (this.streakTrend >= 0) { return 'Keep up the high grade streak!' }
      return 'Your high grade streak is just starting!'
    },
    highScoreTrend() {
      let highScores = 0
      for (let i = this.course.assignments.length - 1; i >= 0; i--) {
        const assignment = this.course.assignments[i]
        if (Math.fround(assignment.grade) !== 80 && assignment.grade < 80) { continue }
        highScores++
      }
      return highScores
    },
    highScoreTrendMessage() {
      if (this.highScoreTrend >= 0) { return 'Keep up the high grades!' }
      return 'You can do it! Reach for your first 80% or higher!'
    },
  },
  methods: {
    getGradeColor,
    getAverageTrend,
  },
}
</script>
