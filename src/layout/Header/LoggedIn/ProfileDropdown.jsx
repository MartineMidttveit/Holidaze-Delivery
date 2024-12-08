import icons from '../../../utils/icons'
import {Link} from 'react-router-dom'
import logoutUser from '../../../api/requests/logoutUser'

export default function ProfileDropdown({ user, setDropDown }) {
  return (
    <div className="absolute z-50 bg-background w-80 right-[5%] lg:right-[7%] 2xl:right-[10%] top-[63px] border shadow-lg">
      <div className="flex gap-2 text-sm pb-1 pt-6 px-8">
        <p className="font-medium">{user.name}</p>
        <span>|</span>
        <p>{user.venueManager ? 'Venue Manager' : 'Customer'}</p>
      </div>
      <p className="text-sm text-secondary border-b border-secondary pb-5 px-8">
        {user.email}
      </p>

      <nav>
        <div className="py-3">
          <div className="py-4 flex items-center gap-3 hover:bg-customLightBlue px-8">
            <icons.profileIcon />
            <Link to="profile" onClick={() => setDropDown(false)}>
              Your profile
            </Link>
          </div>

          {user.venueManager && (
            <div className="py-4 flex items-center gap-3 hover:bg-customLightBlue px-8">
              <icons.newVenueIcon />
              <Link to="/newVenue">New venue</Link>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={logoutUser}
          className="w-full py-4 flex items-center gap-3 hover:bg-customLightBlue px-8 border-secondary border-t"
        >
          <icons.logOutIcon />
          Log out
        </button>
      </nav>
    </div>
  )
}
