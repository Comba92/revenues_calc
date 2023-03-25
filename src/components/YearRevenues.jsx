import { useState } from 'preact/hooks'
import { printPrice } from '../scripts/utils';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const YearRevenues = ({revenues }) => (
   <>
    <div className = "flex flex-col items-center justify-center px-2 pb-8"> 
      <ul className="self-stretch flex-1 space-y-2">
        { revenues.map((profit, month) => 
          <li className="flex justify-center space-x-2">
            <span>{monthNames[month]}: <strong>{printPrice(profit)}</strong></span>
          </li>
        )}
      </ul>
    </div>
    </>
)

export default YearRevenues