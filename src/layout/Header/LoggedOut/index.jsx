import icons from "../../../utils/icons";
import BottomNavEle from "../BottomNavEle";
import RegisterLogin from "./RegisterLogin";
import NavLinks from "../../../components/NavLinks";
import HamburgerBtns from "./HamburgerBtns";
import Hamburger from "../Hamburger";
/**
 * LoggedOut component that displays navigation elements for unauthenticated users
 * @returns {JSX.Element} Rendered navigation menu with home link, bottom nav elements,
 * hamburger buttons and register/login options
 */
export default function LoggedOut() {
  return (
    <>
      <Hamburger>
        <div className="lg:hidden">
          <NavLinks
            linkedPage="/Contact"
            icon={<icons.homeIcon />}
            navText="Home"
          />
        </div>

        <BottomNavEle />
        <HamburgerBtns />

        <RegisterLogin />
      </Hamburger>
    </>
  );
}
