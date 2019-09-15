<script>
  export let data;

  import { onMount } from "svelte";
  import Chart from "chart.js";
  import { useLanguage } from "../hooks";

  let chart = null;

  const getCtx = () => {
    const canvas = document.getElementById("chart");
    if (!canvas) return;
    return canvas.getContext("2d");
  };

  const merge = data => {
    let [store, collect] = useLanguage();
    data.forEach(user => {
      Object.values(user.language).forEach(language => collect(language));
    });
    return Object.entries(store);
  };

  $: {
    const ctx = getCtx();

    let labels = [];
    let sizes = [];
    let colors = [];

    if (data.length) {
      const chartData = merge(data)
        .sort(([_, a], [__, b]) => b.count - a.count)
        .map(([name, val]) => ({ name, val }));

      labels = chartData.map(lang => lang.name);
      sizes = chartData.map(lang => lang.val.count);
      colors = chartData.map(lang => lang.val.color || "#eee");
    }

    if (chart) {
      chart.data.labels = labels;
      chart.data.datasets[0] = {
        data: sizes,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      };
      chart.update();
    }

    if (!chart && ctx && data.length) {
      chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels,
          datasets: [
            {
              data: sizes,
              backgroundColor: colors,
              borderColor: ["#fff"],
              borderWidth: 1
            }
          ]
        },
        options: {}
      });
    }
  }
</script>

<style>
  .canvas {
    width: 60%;
    position: sticky;
    top: 5rem;
    height: fit-content;
  }
</style>

<div class="canvas">
  <canvas id="chart" />
</div>
