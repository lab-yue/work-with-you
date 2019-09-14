<script>
  export let data;

  import Title from "./Title.svelte";
  import { onMount } from "svelte";
  import Chart from "chart.js";
  import { useLanguage } from "../hooks";
  const getCtx = () => {
    const canvas = document.getElementById("chart");
    if (!canvas) return;
    return canvas.getContext("2d");
  };

  const mergeLanguageData = data => {
    let [store, collect] = useLanguage();
    data.forEach(user => {
      Object.values(user.language).forEach(language => collect(language));
    });
    return store;
  };

  $: {
    const ctx = getCtx();

    if (ctx && data.length) {
      const chartData = Object.entries(mergeLanguageData(data))
        .sort(([_, a], [__, b]) => b.count - a.count)
        .map(([name, val]) => ({ name, val }));

      const labels = chartData.map(lang => lang.name);
      const sizes = chartData.map(lang => lang.val.count);
      const colors = chartData.map(lang => lang.val.color || "#eee");

      const ctx = getCtx();

      console.log(colors);
      const myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels,
          datasets: [
            {
              label: "# of Votes",
              data: sizes,
              backgroundColor: colors,
              borderColor: colors,
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
  }
</style>

<div class="canvas">
  <canvas id="chart" />
</div>
