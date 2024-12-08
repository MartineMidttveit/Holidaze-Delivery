/**
 * A reusable button component with different style variants
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the button
 * @param {string} [props.type='button'] - The button type attribute
 * @param {Function} [props.onChange] - Handler for change events
 * @param {('primary'|'secondary'|'third')} [props.variant='primary'] - The button style variant
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {Function} [props.onClick] - Handler for click events
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @returns {JSX.Element} Rendered button component
 */
export default function Button({
  children,
  type = 'button',
  onChange,
  variant = 'primary',
  className,
  onClick,
  disabled = false,
}) {
  const btnVariants = {
    primary:
      'text-sm 2xl:text-base rounded px-3 lg:px-8 bg-contrast text-white h-12 2xl:h-14 flex items-center justify-center gap-2',
    secondary:
      'text-sm 2xl:text-base rounded px-3 lg:px-8 border border-secondary h-12 2xl:h-14 enabled:hover:bg-contrast duration-300 enabled:hover:text-white enabled:hover:border-contrast flex items-center justify-center',
    third:
      'text-sm 2xl:text-base rounded px-3 lg:px-8 border border-secondary h-12 2xl:h-14 enabled:hover:bg-customLightBlue duration-300 enabled:hover:border-customLightBlue flex items-center justify-center',
  }

  return (
    <button
      type={type}
      className={`${btnVariants[variant]} ${className} disabled:opacity-75 disabled:cursor-not-allowed`}
      onChange={e => onChange?.(e)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
