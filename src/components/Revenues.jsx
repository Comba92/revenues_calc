import YearRevenues from "./YearRevenues";
import { printPrice, averageRevenueOfYear } from "../scripts/utils";

const Revenues = ({ revenues, monthsView }) => (
  <section className="py-2 pb-10 px-10 text-gray-800 shadow-sm">
    <div className="container mx-auto">
    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr md:grid-cols-2 md:max-w-full lg:grid-cols-4 lg:max-w-full">
      {revenues.map( (profits, year) => 
        <div className="flex flex-col overflow-hidden border-2 rounded-md border-gray-700">
          <div className="flex flex-col items-center justify-center px-2 py-6 space-y-4">
            <p className="text-lg font-medium">Year {year + 1} <br /> <span className="text-xl text-gray-400">Total revenue of </span>{printPrice(profits[11])}</p>
            <p className="text-5xl font-bold">{ printPrice(averageRevenueOfYear(profits)) }
              <span className="text-xl text-gray-400">/mo</span>
            </p>
          </div>
          {monthsView
            ? <YearRevenues monthsView={monthsView} revenues={profits}/>
            : <></>
          }
        </div>
      )}

    </div>
    </div>
  </section>
)

export default Revenues
