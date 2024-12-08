/**
 * A reusable form input component with label
 * @param {Object} props - The component props
 * @param {string} props.name - The input name and id attribute
 * @param {string} [props.type='text'] - The input type
 * @param {string} props.label - The label text to display
 * @param {boolean} [props.required=true] - Whether the input is required
 * @param {Function} [props.onChange] - Handler for change events (for uncontrolled)
 * @param {Function} [props.register] - React Hook Form register function (for controlled)
 * @param {string} [props.defaultValue=''] - Default input value
 * @param {string} [props.placeholder] - Input placeholder text
 * @param {string} [props.value] - Controlled input value
 * @param {Function} [props.onBlur] - Handler for blur events
 * @param {string} [props.pattern] - Input validation pattern
 * @param {string} [props.title] - Input title/tooltip text
 * @returns {JSX.Element} Rendered input with label
 */
export default function InputLabel({
  name,
  type,
  label,
  required = false,
  onChange,
  register,
  defaultValue = '',
  placeholder,
  value,
  onBlur,
  pattern,
  title,
}) {
  return (
    <div className="flex flex-col w-full">
        <label
          htmlFor={name}
          className="text-sm 2xl:text-base font-medium text-secondary"
        >
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        type={type ?? 'text'}
        id={name}
        name={name}
        value={value}
        className="mt-2 w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12 placeholder:text-sm"
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        {...(register ? register(name, { required }) : {})}
      />
    </div>
  );
}
