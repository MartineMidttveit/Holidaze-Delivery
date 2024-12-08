import LoginModal from "../../../components/modals/LoginModal";
import { Link } from "react-router-dom";

export default function RegisterLogin() {
  return (
    <div className="lg:flex items-center gap-3 hidden">
      <Link to="register" className="font-medium">
        Register
      </Link>
      <p>or</p>

      <LoginModal className="text-sm 2xl:text-base rounded px-3 lg:px-8 bg-contrast text-white h-12 2xl:h-14 flex items-center gap-2" />
    </div>
  );
}
