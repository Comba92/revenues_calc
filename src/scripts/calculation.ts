const YEARS_TO_SHOW = 4

export default function computeYearsRevenues(
  price: number, newCostumers: number, churnedCostumers: number
): number[][] {
  let res: number[] = []

  let currentCostumers = newCostumers - churnedCostumers

  res.push(price * currentCostumers)
  for(let i=1; i<12 * YEARS_TO_SHOW; ++i) {
    const month1 = price * currentCostumers
    const month2 = price * newCostumers
    const month3 = price * churnedCostumers

    res.push(res[i-1] + month1 + month2 - month3)
    currentCostumers = currentCostumers + (newCostumers - churnedCostumers)
  }

  let final: number[][] = []
  for(let i = 0; i<YEARS_TO_SHOW; ++i) {
    final.push(res.slice(i*YEARS_TO_SHOW, i*YEARS_TO_SHOW + 12))
  }

  return final
}