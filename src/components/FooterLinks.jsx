import { Link } from "react-router-dom";
import icons from "../utils/icons";

/**
 * A footer link component with hover effects and an arrow icon
 * @param {Object} props - The component props
 * @param {string} props.linkedPage - The destination path for the link
 * @param {string} props.navText - The text to display in the link
 * @returns {JSX.Element} Rendered footer link component
 */

export default function FooterLinks({ linkedPage, navText }) {
  return (
    <Link
      to={linkedPage}
      className="flex gap-2 items-center text-secondary group hover:text-primary duration-300"
    >
      {navText}
      <icons.arrowRight />
    </Link>
  );
}
