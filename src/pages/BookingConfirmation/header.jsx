import icons from "../../utils/icons.js";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="pb-6 flex items-center gap-3 text-secondary hover:text-primary">
        <icons.longArrowLeft />
        <Link to="/" className="font-medium">
          Back to homepage
        </Link>
      </div>
      <p className="text-contrast font-bold tracking-wider text-sm md:text-base">
        YOUR BOOKING IS CONFIRMED
      </p>
    </>
  )
}
