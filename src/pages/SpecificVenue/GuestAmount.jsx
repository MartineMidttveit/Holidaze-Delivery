import React, {useState} from 'react'
import ChevronDown from '../../components/SVG/ChevronDown'
import Button from '../../components/Button'

const GuestsAmount = ({ guests, setGuests, petAllowed }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [pets, setPets] = useState(0)
  const [guestText, setGuestText] = useState('0 guests')

  function ifOverMaxGuests() {
    if (adults + children >= guests.maxGuests) {
      return true
    }
    return false
  }

  const isOverMaxGuests = ifOverMaxGuests()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleCountChange = (type, operation) => {
    if (operation === '+') {
      if (type === 'adults') setAdults(adults + 1)
      if (type === 'children') setChildren(children + 1)
      if (type === 'pets') setPets(pets + 1)
    } else if (operation === '-') {
      if (type === 'adults' && adults > 0) setAdults(adults - 1)
      if (type === 'children' && children > 0) setChildren(children - 1)
      if (type === 'pets' && pets > 0) setPets(pets - 1)
    }
  }

  const handleApply = () => {
    const totalGuests = adults + children
    setGuests(state => ({ ...state, adults, children }))
    const adultText =
      adults > 0 ? `${adults} adult${adults > 1 ? 's' : ''}` : ''
    const childText =
      children > 0 ? `${children} child${children > 1 ? 'ren' : ''}` : ''
    const petText = pets > 0 ? `${pets} pet${pets > 1 ? 's' : ''}` : ''

    const details = [adultText, childText, petText].filter(Boolean).join(', ')

    const updatedText = `${totalGuests} guest${totalGuests !== 1 ? 's' : ''}${
      details ? ` (${details})` : ''
    }`
    setGuestText(updatedText)
    setIsOpen(false)
  }

  return (
    <div className="pt-3 lg:pt-5">
      <p className="pb-2 lg:pb-3 font-medium md:font-normal text-sm md:text-base">
        Guests:
      </p>
      <button
        type="button"
        className="border border-secondary rounded bg-white py-3 h-12 xl:h-14 max-h-14 flex items-center justify-between px-4 w-full"
        onClick={toggleDropdown}
      >
        <p className="text-sm md:text-base">{guestText}</p>
        <ChevronDown />
      </button>

      <div
        className={`bg-white flex-col border border-secondary px-10 py-7 border-t-0 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {/* Adults */}
        <div className="flex items-center justify-between py-2">
          <p className="text-sm lg:text-base">Adults</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="h-8 w-8 bg-background rounded-full flex items-center justify-center hover:bg-contrast duration-300 hover:text-white"
              onClick={() => handleCountChange('adults', '-')}
            >
              -
            </button>
            <span>{adults}</span>
            <button
              disabled={isOverMaxGuests}
              type="button"
              className="h-8 w-8 bg-background rounded-full flex items-center justify-center hover:bg-contrast duration-300 hover:text-white"
              onClick={() => handleCountChange('adults', '+')}
            >
              +
            </button>
          </div>
        </div>

        {/* Children */}
        <div className="flex items-center justify-between py-2">
          <p className="text-sm lg:text-base">Children</p>
          <div className="flex items-center gap-4">
            <button
              disabled={isOverMaxGuests || adults == 0}
              type="button"
              className="h-8 w-8 bg-background rounded-full flex items-center justify-center duration-300
                          hover:bg-contrast hover:text-white
                          disabled:bg-background disabled:cursor-not-allowed disabled:text-primary"
              onClick={() => handleCountChange('children', '-')}
            >
              -
            </button>
            <span>{children}</span>
            <button
              disabled={isOverMaxGuests || adults == 0}
              type="button"
              className="h-8 w-8 bg-background rounded-full flex items-center justify-center duration-300
                          hover:bg-contrast hover:text-white
                          disabled:bg-background disabled:cursor-not-allowed disabled:text-primary"
              onClick={() => handleCountChange('children', '+')}
            >
              +
            </button>
          </div>
        </div>

        {/* Pets */}
        {petAllowed && (
          <div className="flex items-center justify-between py-2">
            <p className="text-sm lg:text-base">Pets</p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="h-8 w-8 bg-background rounded-full flex items-center justify-center hover:bg-contrast duration-300 hover:text-white"
                onClick={() => handleCountChange('pets', '-')}
              >
                -
              </button>
              <span>{pets}</span>
              <button
                disabled={isOverMaxGuests || adults == 0}
                type="button"
                className="h-8 w-8 bg-background rounded-full flex items-center justify-center hover:bg-contrast duration-300 hover:text-white"
                onClick={() => handleCountChange('pets', '+')}
              >
                +
              </button>
            </div>
          </div>
        )}

        <Button variant="third" onClick={handleApply} className="w-full mt-4">
          Apply
        </Button>
      </div>
    </div>
  )
}

export default GuestsAmount
