import { useState } from 'preact/hooks'
import InputForm from './InputForm'
import Revenues from './Revenues'

export default function Main() {
  const [revenues, setRevenues] = useState([])
  const [monthsView, setMonthsView] = useState(false)

  return (
    <div>
      <section class="container flex flex-col items-center px-4 pt-10  mx-auto text-center md:px-10 lg:px-32">
        <h1 class="text-4xl font-bold leading-none sm:text-5xl"><span>Revenues</span> Calculator</h1>
        <InputForm setRevenues={setRevenues} monthsView={monthsView} setMonthsView={setMonthsView}/>
      </section>
      <section class="container flex flex-col items-center px-3 mx-auto text-center md:px-8 lg:px-16">
        <Revenues revenues={revenues} monthsView={monthsView} />
      </section>
    </div>
  )
}