import LoginModal from '../../../components/modals/LoginModal'
import { Link } from 'react-router-dom'

export default function HamburgerBtns() {
  return (
    <div className="lg:hidden px-8 py-6 gap-3 border-t border-secondary flex items-center">
      <Link to="/register" className='text-sm 2xl:text-base rounded px-3 lg:px-8 border border-secondary h-12 2xl:h-14 flex items-center gap-2'>Register</Link>
      <LoginModal className="text-sm 2xl:text-base rounded px-3 lg:px-8 bg-contrast text-white h-12 2xl:h-14 flex items-center gap-2"/>
    </div>
  )
}
