<script lang="ts">
  import '@carbon/charts-svelte/styles.css'
  import { BarChartSimple } from '@carbon/charts-svelte'

  // Props
  export let stats: Pokemon.PokemonStatsChart
  ///- Props
</script>

<h3 class="text-sm font-bold">Stats</h3>
<BarChartSimple data={stats.data} options={stats.options} />
