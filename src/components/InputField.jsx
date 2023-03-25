const InputField = ({ name, price }) => (
  <div className="flex">
    <input required type="number" name={name} placeholder="Insert a value..." className="flex flex-1 text-center border px-2 sm:text-sm rounded-l-md focus:ring-inset border-gray-700 text-gray-800 bg-white-800 focus:ring-violet-400" />
    <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md bg-gray-100">{price ? '$' : 'users'}</span>
  </div>
)

export default InputField