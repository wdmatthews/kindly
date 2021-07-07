export default {
  color: '#FFFFFF',
  tension: 0.1,
  elements: {
    point: {
      radius: 5,
      hoverRadius: 4,
      borderWidth: 0,
    },
    line: {
      borderColor: '#FFFFFF',
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      left: -8,
      right: 16,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      suggestedMin: 0,
      suggestedMax: 100,
      grid: {
        display: true,
        color: '#455A64',
        lineWidth: 2,
        drawBorder: false,
        drawTicks: false,
      },
      ticks: {
        display: true,
        color: '#FFFFFF',
        padding: 16,
        font: {
          family: '"Dosis", sans-serif',
        },
      },
    },
  },
}
