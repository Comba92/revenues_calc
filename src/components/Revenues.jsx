const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Revenues({ revenues }) {
  return (
    <div>
      {
        revenues.map((profits, year) => {
          return profits.map((profit, month) => {
            return <p>Year {year+1} - {monthNames[month]}: {profit}</p>
          })
        })
      }
    </div>
  )
}