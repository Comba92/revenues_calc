import { useState } from 'preact/hooks'
import { printPrice } from '../scripts/utils';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function YearRevenues({ defaultVisible, revenues }) {
  const [visible, setVisible] = useState(defaultVisible)

  return (
    <div clas="card">
      { visible 
        ?  revenues.map((profit, month) => 
          <span>{monthNames[month]}: <strong>{printPrice(profit)}</strong><br /></span>
        )
        : ''
      }
      <button onClick={() => setVisible(!visible)} class='button-block'>
        { !visible ? 'Show full year' : 'Hide' }
      </button>
    </div>
  )
}