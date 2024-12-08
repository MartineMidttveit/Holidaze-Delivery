import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'

export default function PriceRange({ state, dispatch }) {
  const handleRangeChange = value => {
    dispatch({ type: 'price', payload: value })
  }

  const handleInputChange = (value, index) => {
    const newValue = Number.parseInt(value)
    if (Number.isNaN(newValue)) return

    const currentValues = [state.min, state.max]
    currentValues[index] = Math.min(Math.max(newValue, 0), 10000)

    dispatch({ type: 'price', payload: currentValues })
  }

  return (
    <div className="pb-6">
      <h3 className="font-medium mb-5 pt-4 text-sm md:text-base">Price:</h3>
      <RangeSlider
        value={[state.min, state.max]}
        max={10000}
        onInput={handleRangeChange}
      />

      <div className="flex gap-3 mt-6 text-sm md:text-base">
        <input
          type="number"
          className="outline-none remove-arrow h-12 border border-secondary w-1/2 rounded text-center"
          value={state.min}
          onChange={e => handleInputChange(e.target.value, 0)}
          max={10000}
        />
        <input
          type="number"
          className="outline-none remove-arrow h-12 border border-secondary w-1/2 rounded text-center"
          value={state.max}
          onChange={e => handleInputChange(e.target.value, 1)}
          max={10000}
        />
      </div>
    </div>
  )
}
