<script>
  import Title from "./Title.svelte";
  import { onMount } from "svelte";
  import Chart from "chart.js";

  onMount(() => {
    const ctx = document.getElementById("chart").getContext("2d");

    const myChart = new Chart(ctx, {
      type: "polarArea",
      data: {
        labels: ["C++", "Python", "JavaScript", "Shell", "Eilxer", "Kotlin"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {}
    });
  });
</script>

<Title />
<canvas id="chart" />
