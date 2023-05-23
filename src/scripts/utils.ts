export const printPrice = (number: number) => Intl.NumberFormat().format(number) + '$'
export function averageRevenueOfYear(revenues: number[][], year: number) {
  if (year === 0) return Math.round(revenues[0][11] / 12)
  return Math.round( (revenues[year][11] - revenues[year-1][11]) / 12) 
}