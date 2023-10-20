import { type BarChartOptions, ScaleTypes } from '@carbon/charts-svelte'

export const parsePokemonStatsToBarChart = (
  stats: Pokemon.Stat[]
): {
  data: { group: string; value: number }[]
  options: BarChartOptions
} => {
  return {
    data: stats.map(({ stat, base_stat }) => ({
      group: stat.name,
      value: base_stat,
    })),
    options: {
      title: '',
      axes: {
        left: {
          mapsTo: 'group',
          scaleType: ScaleTypes.LABELS,
        },
        bottom: {
          mapsTo: 'value',
        },
      },
      height: '300px',
    },
  }
}
