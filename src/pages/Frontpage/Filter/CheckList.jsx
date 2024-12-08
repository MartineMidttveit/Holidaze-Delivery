import CheckboxLabel from '../../../components/CheckboxLabel'
import icons from '../../../utils/icons'

/**
 * A dropdown checklist component that displays a list of checkable items
 * @param {Object} props - The component props
 * @param {Object} props.data - Data object containing header, items and type
 * @param {string} props.data.header - The header text to display
 * @param {Array} props.data.items - Array of items to display as checkboxes
 * @param {string} props.data.type - The type identifier for dispatch
 * @param {Function} props.dispatch - Dispatch function to update state
 * @param {Array} props.state - Current state array of selected items
 * @returns {JSX.Element} Rendered checklist dropdown
 */
export default function CheckList({ data, dispatch, state }) {
  const { header, items, type } = data

  /**
   * Handles checkbox change events
   * @param {string} item - The item value that was changed
   */
  const handleChange = item => {
    const isAlreadySelected = state.includes(item)
    const updatedState = isAlreadySelected
      ? state.filter(selected => selected !== item)
      : [...state, item]

    dispatch({
      type: type,
      payload: updatedState,
    })
  }

  return (
    <details className="border-b border-secondary border-opacity-40">
      <summary className="flex items-center justify-between pb-6 pt-4 cursor-pointer">
        <h3 className="text-sm md:text-base font-medium">{header}</h3>
        <icons.chevronDown />
      </summary>

      <div className="flex flex-col gap-3 pb-6">
        {items.map((item, i) => (
          <CheckboxLabel
            key={i}
            name={item.name}
            label={item.label}
            checked={state.includes(item.value)}
            onChange={() => handleChange(item.value)}
          />
        ))}
      </div>
    </details>
  )
}
