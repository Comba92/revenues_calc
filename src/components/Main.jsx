import { useState } from 'preact/hooks'
import InputForm from './InputForm'
import Revenues from './Revenues'

export default function Main() {
  const [revenues, setRevenues] = useState([])

  return (
    <div>
      <InputForm setRevenues={setRevenues} />
      <Revenues revenues={revenues} />
    </div>
  )
}