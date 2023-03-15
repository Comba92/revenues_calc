import YearRevenues from "./YearRevenues";
import { printPrice } from "../scripts/utils";

export default function Revenues({ revenues }) {
  
  
  return (
    <ul class="card-grid">
      {
        revenues.map((profits, year) => 
          <div class="text-block">
            <h2>Year {year + 1}: <strong>{printPrice(profits[11])}</strong></h2>
            { year === 0
              ? <YearRevenues defaultVisible={true} revenues={profits}/>
              : <YearRevenues defaultVisible={false} revenues={profits}/>
            }
          </div>
        )
      }
    </ul>
  )
}