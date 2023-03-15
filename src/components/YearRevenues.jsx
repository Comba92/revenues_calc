import { useState } from 'preact/hooks'
import { printPrice } from '../scripts/utils';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function YearRevenues({ defaultVisible, revenues }) {
  const [visible, setVisible] = useState(defaultVisible)

  return (
    <div>
      { visible 
        ?  revenues.map((profit, month) => 
          <p>{monthNames[month]}: {printPrice(profit)}</p>
        )
        : ''
      }
      <button onClick={() => setVisible(!visible)}>
        { !visible ? 'Show full year' : 'Hide' }
      </button>
    </div>
  )
}