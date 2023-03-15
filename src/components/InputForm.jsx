import computeYearsRevenues from '../scripts/calculation'

export default function InputForm({ setRevenues }) {
  const computeRevenues = (event) => {
    event.preventDefault()
    
    const price = event.target.elements.price.value
    const newUsers = event.target.elements.newUsers.value
    const lostUsers = event.target.elements.lostUsers.value

    const rev = computeYearsRevenues(price, newUsers, lostUsers)
    setRevenues( rev )
  }

  return (
    <div>
      <form onSubmit={computeRevenues}>
        <p class='text-block'>What's the <strong>price</strong>? <input name="price" class="input-block"/></p>
        <p class='text-block'>How many <strong>new users</strong>? <input name="newUsers" class="input-block" /></p>
        <p class='text-block'>How many <strong>lost users</strong>? <input name="lostUsers" class="input-block" /></p>
        <div style="text-align: center">
          <button type="submit" class="button-block">
            <h2>Compute</h2>
          </button>
        </div>
      </form>
    </div>
  )
}