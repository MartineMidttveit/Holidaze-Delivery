import icons from '../../utils/icons'
import DeleteVenue from '../Modals/DeleteVenue'

export default function Actions({ venue }) {
  const bookings = venue._count.bookings

  return (
    <div className="absolute top-4 right-4 flex gap-3">
      <span className="bg-white h-10 px-3 2xl:px-4 flex items-center justify-center rounded text-xs 2xl:text-sm font-medium">
        {bookings} {bookings === 1 ? 'Booking' : 'Bookings'}
      </span>

      <DeleteVenue
        id={venue.id}
        trigger={
          <button
            className="bg-white text-primary rounded w-10 h-10 px-2 flex items-center justify-center"
            type="button"
          >
            <icons.deleteIcon size={20} />
          </button>
        }
      />
    </div>
  )
}
