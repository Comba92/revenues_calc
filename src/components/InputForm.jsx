import computeYearsRevenues from '../scripts/calculation'

export default function InputForm({ setRevenues }) {
  const computeRevenues = (event) => {
    event.preventDefault()
    
    const price = event.target.elements.price.value
    const newUsers = event.target.elements.newUsers.value
    const lostUsers = event.target.elements.lostUsers.value

    const rev = computeYearsRevenues(price, newUsers, lostUsers)
    console.log(rev)
    setRevenues( rev )
  }

  return (
    <div>
      <form onSubmit={computeRevenues}>
        <p>What's the price? <input name="price" /></p>
        <p>How many new users? <input name="newUsers" /></p>
        <p>How many lost users? <input name="lostUsers" /></p>
        <button type="submit">Compute</button>
      </form>
    </div>
  )
}