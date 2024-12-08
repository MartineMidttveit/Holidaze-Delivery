import GuestsAmount from '../GuestAmount'
import Button from '../../../components/Button'
import BookingCalendar from './BookingCalendar'
import BookingHeader from './BookingHeader'
import BookingPrices from './BookingPrices'
import BookingFooterInfo from './BookingFooterInfo'
import {useState} from 'react'
import getNumberOfDays from '../../../utils/getNumberOfDays'
import createBooking from '../../../api/requests/createBooking'
import {useNavigate, useParams} from 'react-router-dom'
import storage from '../../../api/helpers/storage'
import LoginModal from '../../../components/modals/loginModal'
import BookingsForOwner from './BookingsForOwner.jsx'

export default function Booking({ data, isOwner }) {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  })
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    maxGuests: data.maxGuests,
  })

  const isLoggedIn = storage.get('auth_token')

  const navigate = useNavigate()
  const params = useParams()

  async function onSubmit() {
    const body = {
      venueId: data.id,
      dateFrom: date.startDate,
      dateTo: date.endDate,
      guests: guests.adults + guests.children,
    }

    const newData = await createBooking(body)

    navigate('/bookingConfirmation', {
      state: { data: newData, venueId: params.venueId, guests },
    })
  }

  const numNights = getNumberOfDays(date.startDate, date.endDate)
  const isDisabled = !numNights || guests.adults === 0

  return (
    <>
      {isOwner ? (
        <BookingsForOwner data={data} />
      ) : (
        <>
          <div className="bg-white mt-8 xl:mt-10 rounded-lg shadow-lg">
            <div className="py-8 px-6 md:p-10 lg:p-12">
              <BookingHeader price={data.price} />
              <BookingCalendar
                bookings={data?.bookings}
                dates={date}
                setDates={setDate}
              />
              <GuestsAmount
                guests={guests}
                setGuests={setGuests}
                petAllowed={data.meta.pets}
              />
              <div className="flex flex-col text-sm md:text-base">
                <BookingPrices price={data.price} numNights={numNights} />
                {isLoggedIn ? (
                  <Button
                    type="submit"
                    className="mt-6 "
                    disabled={isDisabled}
                    onClick={onSubmit}
                  >
                    Make reservation
                  </Button>
                ) : (
                  <LoginModal
                    className="mt-6 text-sm 2xl:text-base rounded px-3 lg:px-8 bg-contrast text-white h-12 2xl:h-14 flex items-center justify-center gap-2 w-full"
                    text="Login to make reservation"
                  />
                )}
              </div>
            </div>
          </div>

          <BookingFooterInfo />
        </>
      )}
    </>
  )
}
