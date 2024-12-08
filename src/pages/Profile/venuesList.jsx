import {useNavigate} from 'react-router-dom'
import Thumbnail from '../../components/Thumbnail'
import Button from '../../components/Button'
import {v4 as uuidv4} from 'uuid';
import {isAfter} from "date-fns";

const VenuesList = ({ selectedOption, userBookings, filteredVenues }) => {
  const navigate = useNavigate()

  return (
    <div className="gap-9 2xl:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
      {filteredVenues.length === 0 && (
        <p className="text-center col-span-full">No venues found.</p>
      )}
      {filteredVenues?.map(venue => {
        const booking =
          selectedOption === 'bookings'
            ? userBookings?.find(booking => booking.venue.id === venue.id)
            : null

        const today = new Date()

        if (booking?.dateTo && isAfter(today, new Date(booking.dateTo))) {
          return null
        }

        return (
          <div key={`${venue.id}-${uuidv4()}`} className="space-y-6">
            <Thumbnail
              venue={venue}
              selectedOption={selectedOption}
              booking={booking}
            />
            {selectedOption === 'all-venues' && (
              <Button
                type="button"
                className="w-full"
                variant="secondary"
                onClick={() => navigate(`/${venue.id}/editVenue`)}
              >
                {selectedOption === 'bookings' ? 'Edit Booking' : 'Edit Venue'}
              </Button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default VenuesList
