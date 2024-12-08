import icons from '../../utils/icons.js'

const SelectOptions = ({ selectedOption, setSelectedOption, isManager }) => (
  <form className="relative inline-block w-fit">
    <select
      id="options"
      className="relative h-12 2xl:h-14 px-3 2xl:px-4 rounded border border-secondary outline-none appearance-none min-w-72"
      onChange={e => setSelectedOption(e.target.value)}
      value={selectedOption}
    >
      {isManager && <option value="all-venues">Your venues</option>}
      <option value="past-stays">Your past stays</option>
      <option value="favorites">Your favorites</option>
      <option value="bookings">Your bookings</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
      <icons.chevronDown />
    </div>
  </form>
)

export default SelectOptions
