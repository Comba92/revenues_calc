import computeYearsRevenues from '../scripts/calculation'

import InputField from './InputField'

export default function InputForm({ setRevenues, monthsView, setMonthsView }) {
  const computeRevenues = (event) => {
    event.preventDefault()
    
    const price = event.target.elements.price.value
    const newUsers = event.target.elements.newUsers.value
    const lostUsers = event.target.elements.lostUsers.value

    const rev = computeYearsRevenues(price, newUsers, lostUsers)
    setRevenues( rev )
  }

  const switchMonthsView = (event) => {
    event.preventDefault()
    setMonthsView(!monthsView)
  }

  return (
    <section className="p-6 text-gray-800">
      <form novalidate="" action="" className="container flex flex-col mx-auto space-y-5 ng-untouched ng-pristine ng-valid shadow-sm p-3" onSubmit={computeRevenues}>
        <fieldset className="w-full space-y-1 text-gray-800">
          <p>What's the <strong>price</strong>? <InputField name="price" price/></p>
          <p>How many <strong>new users</strong>? <InputField name="newUsers" /></p>
          <p>How many <strong>lost users</strong>? <InputField name="lostUsers"/></p>
        </fieldset>
        <div className="flex flex-wrap justify-center space-x-4">
          <button type="submit" className="text-center px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800">Compute!</button>
          <button type="button" className="text-center px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800" onClick={switchMonthsView}>
            {monthsView ? 'Show months!' : 'Hide months!'}</button>
        </div>
      </form>
    </section>
  )
}