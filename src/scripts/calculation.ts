const YEARS_TO_SHOW = 4

export default function computeYearsRevenues(
  price: number, newCostumers: number, churnedCostumers: number
): number[][] {
  let res: number[] = []

  let currentCostumers: number = newCostumers

  res.push(price * currentCostumers)
  for(let i=1; i<12 * YEARS_TO_SHOW; ++i) {
    const churnedCount = Math.round(currentCostumers * (churnedCostumers / 100))
    console.log(currentCostumers, churnedCount, (churnedCostumers / 100))
    const month1 = price * currentCostumers
    const month2 = price * newCostumers
    const month3 = price * churnedCount
    // total : 100 = x : churnedPercetnage

    res.push(res[i-1] + month1 + month2 - month3)
    currentCostumers = currentCostumers + (newCostumers - churnedCount)
  }
  console.log(res)

  let final: number[][] = []
  for(let i = 0; i<YEARS_TO_SHOW; ++i) {
    final.push(res.slice(i*12, i*12 + 12))
  }

  return final
}