<script>
  import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["January", "February"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'],
        //   backgroundColor: "#f87979",
          data: [10,30]
        },
      ],
    },
    options: {
         scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
      responsive: true,
      maintainAspectRatio: false,
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>