import computeYearsRevenues from '../scripts/calculation'

import InputField from './InputField'

export default function InputForm({ setRevenues, monthsView, setMonthsView }) {
  const computeRevenues = (event) => {
    event.preventDefault()
    
    const price = Number(event.target.elements.price.value)
    const newUsers = Number(event.target.elements.newUsers.value)
    const lostUsers = Number(event.target.elements.lostUsers.value)
    const fixedCosts = Number(event.target.elements.fixedCosts.value)
    const variableCosts = Number(event.target.elements.variableCosts.value)

    const rev = computeYearsRevenues(price, newUsers, lostUsers, fixedCosts, variableCosts)
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
          <p>What's the <strong>price</strong>? <InputField name="price" label="$"/></p>
          <p>How many <strong>new users</strong>? <InputField name="newUsers" label="users"/></p>
          <p>How many <strong>lost users</strong>? <InputField name="lostUsers" label="%"/></p>
          <p>What are your <strong>fixed costs</strong>? <InputField name="fixedCosts" label="$"/></p>
          <p>What are your <strong>variable costs</strong> per costumer? <InputField name="variableCosts" label="$"/></p>
        </fieldset>
        <div className="flex flex-wrap justify-center">
          <button type="submit" className="text-center px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800">Compute!</button>
          <button type="button" className="text-center px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800" onClick={switchMonthsView}>
            {!monthsView ? 'Show months!' : 'Hide months!'}</button>
        </div>
      </form>
    </section>
  )
}