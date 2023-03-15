import YearRevenues from "./YearRevenues";
import { printPrice } from "../scripts/utils";

export default function Revenues({ revenues }) {
  return (
    <div>
      {
        revenues.map((profits, year) => 
          <div>
            <p>Year {year+1}: {printPrice(profits[11])}</p>
            { year === 0
              ? <YearRevenues defaultVisible={true} revenues={profits}/>
              : <YearRevenues defaultVisible={false} revenues={profits}/>
            }
          </div>
        )
      }
    </div>
  )
}