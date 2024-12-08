import { useState } from "react";

/**
 * A reusable modal component with trigger button and overlay
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to display inside the modal
 * @param {string} props.triggerText - The text to display in the trigger button
 * @param {string} props.triggerClasses - CSS classes to apply to the trigger button
 * @returns {JSX.Element} Rendered modal component
 */
export default function Modal({ children, triggerText, triggerClasses }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={triggerClasses}
      >
        {triggerText}
      </button>
      {isOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-40 items-center justify-center h-screen hidden">
          <div className="bg-white rounded px-4 md:p-16 flex justify-center flex-col relative h-screen w-full md:h-fit md:w-fit">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
