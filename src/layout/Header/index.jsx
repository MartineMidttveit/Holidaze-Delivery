import LoggedIn from './LoggedIn/'
import LoggedOut from './LoggedOut/'
import storage from '../../api/helpers/storage'
import { Link } from 'react-router-dom'
import Banner from './Banner'

/**
 * Header component that displays the site banner and navigation based on authentication status
 * @returns {JSX.Element} Rendered header component with conditional navigation
 */
export default function Header() {
  const token = storage.get('auth_token')

  return (
    <header className="font-poppins text-primary">
      <Banner />
      <div className="bg-background px-[5%] lg:px-[7%] border-b relative">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold">
            Holidaze
          </Link>
          {token ? <LoggedIn token={token} /> : <LoggedOut />}
        </div>
      </div>
    </header>
  )
}
