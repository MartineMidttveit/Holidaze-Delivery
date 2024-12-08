import icons from '../../utils/icons'
import {useState} from 'react'

export default function Hamburger({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className="py-2 pl-2 lg:hidden"
      >
        {isMenuOpen ? (
          <icons.closeIcon size={26} />
        ) : (
          <icons.hamburgerIcon size={26} />
        )}
      </button>

      <nav
        className={`px-4 flex-col shadow-lg lg:shadow-none z-50 lg:flex lg:items-center lg:flex-row transition-all duration-300 ${
          isMenuOpen ? 'flex' : 'hidden lg:flex'
        } absolute lg:static bg-background w-full lg:w-auto top-20 right-0`}
      >
        {children}
      </nav>
    </>
  )
}
