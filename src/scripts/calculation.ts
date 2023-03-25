const YEARS_TO_SHOW = 4

export default function computeYearsRevenues(
  price: number, newCostumers: number, churnedCostumers: number
): number[][] {
  const monthlyProfit = price * newCostumers
  const monthlyLoss = price * churnedCostumers

  const yearsRevenues = [ computeMonthsRevenues(monthlyProfit, monthlyLoss, 0) ]

  for (let year = 1; year < YEARS_TO_SHOW; ++year) {
    let currentYearRevenues = computeMonthsRevenues(monthlyProfit, monthlyLoss, yearsRevenues[year-1][11])
    yearsRevenues.push(currentYearRevenues)
  }

  return yearsRevenues
}

function computeMonthsRevenues(
  monthlyProfit: number, monthlyLoss: number, lastYearProfit: number
): number[] {
  const totalMonthlyProfit = monthlyProfit - monthlyLoss
  
  let monthsRevenues = lastYearProfit == 0 
    ? [monthlyProfit + lastYearProfit]
    : [lastYearProfit + totalMonthlyProfit]

  for (let month = 1; month < 12; ++month) {
    let profit = monthsRevenues[month - 1] + totalMonthlyProfit
    monthsRevenues.push(profit)
  }

  return monthsRevenues
}