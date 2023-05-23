export const printPrice = (number: number) => '$' + Intl.NumberFormat().format(number)
export function averageRevenueOfYear(revenues: number[]) {
  return Math.round(revenues.pop()! / 12)
}