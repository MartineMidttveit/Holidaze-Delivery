import icons from '../../../utils/icons'
import ProfileDropdown from './ProfileDropdown'
import { useState } from 'react'
import NavLinks from '../../../components/NavLinks'
import { avatar } from '../../../utils/avatar'

export default function DesktopLogIn({ user }) {
  const [dropDown, setDropDown] = useState(false)

  function handleClick() {
    setDropDown(prevState => !prevState)
  }

  return (
    <div className="hidden lg:flex items-center gap-6">
      <div className="flex items-center">
        <div className="border-r border-secondary">
          <NavLinks linkedPage="/Contact" navText="Contact us" />
        </div>

        <div className="pl-8">
          <icons.heartIcon />
        </div>
      </div>

      <div className="relative">
        <button type="button" onClick={handleClick}>
          <img
            src={avatar(user.avatar.url)}
            alt={user.avatar?.alt ?? 'Profile avatar'}
            className="object-cover h-10 w-10 rounded-full hover:opacity-75 duration-150"
          />
          <div
            className={`absolute top-6 left-7 shadow-lg h-5 w-5 bg-white flex items-center justify-center rounded-full transition-transform duration-300 ${dropDown ? 'rotate-180' : 'rotate-0'}`}
          >
            <icons.chevronDown size={16} />
          </div>
        </button>

        {dropDown && <ProfileDropdown user={user} setDropDown={setDropDown} />}
      </div>
    </div>
  )
}
