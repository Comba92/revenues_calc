import { useState } from 'preact/hooks'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function YearRevenues({ revenues }) {
  const [visible, setVisible] = useState(false)
  
  return (
    <div>
      { visible 
        ?  revenues.map((profit, month) => 
          <p>{monthNames[month]}: {profit}</p>
        )
        : ''
      }
      <button onClick={() => setVisible(!visible)}>
        { !visible ? 'Show full year' : 'Hide' }
      </button>
    </div>
  )
}