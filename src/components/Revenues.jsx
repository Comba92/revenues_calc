import YearRevenues from "./YearRevenues";

export default function Revenues({ revenues }) {
  return (
    <div>
      {
        revenues.map((profits, year) => 
          <div>
            <p>Year {year+1}: {profits[11]}</p>
            <YearRevenues revenues={profits}/>
          </div>
        )
      }
    </div>
  )
}