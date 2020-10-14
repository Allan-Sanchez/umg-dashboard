<script>
import { Radar } from "vue-chartjs";
export default {
  extends: Radar,
  data() {
    return {
      datacollection: {
        labels: [
          "English",
          "Maths",
          "Physics",
          "Chemistry",
          "Biology",
          "History",
        ],
        datasets: [
          {
            label: "Student A",
            backgroundColor: "rgba(200,0,0,0.2)",
            data: [65, 75, 70, 80, 60, 80],
          },
          {
            label: "Student B",
            backgroundColor: "rgba(0,0,200,0.2)",
            data: [54, 65, 60, 70, 70, 75],
          },
        ],
      },
      options: {
        scale: {
          angleLines: {
            display: false,
          },
          ticks: {
            suggestedMin: 40,
            suggestedMax: 100,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
</script>