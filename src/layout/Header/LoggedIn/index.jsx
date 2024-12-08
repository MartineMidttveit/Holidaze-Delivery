import BottomNavEle from "../BottomNavEle";
import VenueManager from "./VenueManager";
import LogOutOpt from "./LogOutOpt";
import DesktopLogIn from "./DesktopLogIn";
import storage from "../../../api/helpers/storage";
import getProfile from "../../../api/requests/getProfile";
import Customer from "./Customer";
import Hamburger from "../Hamburger";

import { useState, useEffect } from "react";

/**
 * LoggedIn component that displays navigation elements for authenticated users
 * @param {Object} props - The component props
 * @param {string} props.token - The authentication token for the user
 * @returns {JSX.Element|null} Rendered navigation menu with venue manager/customer view,
 * bottom nav elements, logout option and desktop login. Returns null if user data is not loaded.
 */
export default function LoggedIn({ token }) {
  const [user, setUser] = useState(null);
  const username = storage.get("profile_name");

  useEffect(() => {
    async function fetchData() {
      const data = await getProfile(username, token);

      setUser(data);
    }
    fetchData();
  }, []);

  if (!user) return null;

  return (
    <Hamburger>
      {user?.venueManager ? <VenueManager /> : <Customer />}
      <BottomNavEle />
      <LogOutOpt user={user} />

      <DesktopLogIn user={user} />
    </Hamburger>
  );
}
