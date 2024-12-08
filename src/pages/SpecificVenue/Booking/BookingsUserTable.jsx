import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {format} from 'date-fns'
import icons from '../../../utils/icons'
import validateImageUrl from '../../../utils/validateImageUrl'
import placeholderImage from '../../../utils/placeholderImage'

export default function BookingsUserTable({ data }) {
  const bookings = data.bookings
  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const [imageSources, setImageSources] = useState({})

  const totalPages = Math.ceil(bookings.length / itemsPerPage)

  const currentBookings = bookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

  useEffect(() => {
    for (let i = 0; i < currentBookings.length; i++) {
      const booking = currentBookings[i]
      const url = booking.customer.avatar.url

      validateImageUrl(url, isValid => {
        setImageSources(prevSources => ({
          ...prevSources,
          [booking.id]: isValid ? url : placeholderImage(),
        }))
      })
    }
  }, [currentBookings])

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-sm">
          <tr>
            <th scope="col" className="py-3 font-medium">
              Customer:
            </th>
            <th scope="col" className="py-3 font-medium">
              Dates:
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Guests:
            </th>
          </tr>
        </thead>
        <tbody>
          {currentBookings.map((booking, index) => {
            const itemNumber = (currentPage - 1) * itemsPerPage + index + 1
            const imageSrc = imageSources[booking.id] || placeholderImage()

            return (
              <tr key={booking.id} className="hover:bg-background">
                <th scope="row" className="text-start py-4 font-medium">
                  <div className="flex items-center gap-4 text-secondary">
                    <span className="block w-2">{itemNumber}.</span>
                    <img
                      className="size-11 rounded-full block p-0"
                      src={imageSrc}
                      alt={booking.customer.avatar.alt ?? ''}
                    />
                    <Link to="/profile">
                      <span
                        className="max-w-[10ch] block truncate"
                        title={booking.customer.name}
                      >
                        {booking.customer.name}
                      </span>
                    </Link>
                  </div>
                </th>
                <td className="py-4">
                  <div className="flex">
                    <span className="text-sm font-medium">
                      {format(booking.dateFrom, 'dd.MM.yy')}
                    </span>
                    {' - '}
                    <span className="text-sm font-medium">
                      {format(booking.dateTo, 'dd.MM.yy')}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">{booking.guests}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-end gap-3 mt-3 text-sm">
        <button
          type="button"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="rounded-full bg-background enabled:hover:bg-opacity-100 duration-300 h-8 w-8 xl:h-10 xl:w-10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-contrast hover:text-white disabled:bg-background disabled:text-primary"
        >
          <icons.chevronLeft />
        </button>
        Page {currentPage} of {totalPages}
        <button
          type="button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="rounded-full bg-background enabled:hover:bg-opacity-100 duration-300 h-8 w-8 xl:h-10 xl:w-10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-contrast hover:text-white disabled:bg-background disabled:text-primary"
        >
          <icons.chevronRight />
        </button>
      </div>
    </div>
  )
}
