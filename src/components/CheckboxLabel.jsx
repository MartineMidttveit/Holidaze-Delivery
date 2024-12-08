/**
 * A reusable checkbox/radio input component with label
 * @param {Object} props - The component props
 * @param {string} [props.type='checkbox'] - The input type (checkbox or radio)
 * @param {string} props.name - The input name and id attribute
 * @param {string} props.label - The label text to display
 * @param {boolean} [props.checked] - Whether the input is checked (for uncontrolled)
 * @param {Function} [props.onChange] - Handler for change events (for uncontrolled)
 * @param {Function} [props.register] - React Hook Form register function (for controlled)
 * @param {boolean} [props.defaultValue] - Default checked state
 * @returns {JSX.Element} Rendered checkbox/radio input with label
 */
export default function CheckboxLabel({
  type = "checkbox",
  name,
  label,
  checked,
  onChange,
  register,
  defaultValue,
}) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <input
        type={type}
        name={name}
        id={name}
        className="h-6 w-6 rounded"
        {...(register ? register(name) : { checked, onChange })}
        defaultChecked={defaultValue}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
