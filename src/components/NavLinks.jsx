import { Link } from "react-router-dom";

/**
 * A navigation link component with hover effects and an icon
 * @param {Object} props - The component props
 * @param {string} props.linkedPage - The destination path for the link
 * @param {React.ReactNode} props.icon - The icon element to display
 * @param {string} props.navText - The text to display in the link
 * @returns {JSX.Element} Rendered navigation link component
 */
export default function NavLinks({ linkedPage, icon, navText }) {
  return (
    <Link
      to={linkedPage}
      className="px-8 py-2.5 lg:hover:font-medium hover:bg-customLightBlue hover:rounded duration-150 lg:hover:bg-background flex gap-3 items-center"
    >
      {icon}
      {navText}
    </Link>
  );
}
