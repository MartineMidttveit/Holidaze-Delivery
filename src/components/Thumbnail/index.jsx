import FigureImage from './FigureImage';
import Favorite from './Favorite';
import GuestFavorite from './GuestFavorite';
import FigureDescription from './FigureDescription';
import { Link } from 'react-router-dom';
import Actions from './Actions';
import { format, isAfter, parseISO } from 'date-fns';

/**
 * Thumbnail component that displays a venue card with various options and states
 * @param {Object} props - The component props
 * @param {Object} props.venue - The venue object containing details like id, media, etc.
 * @param {string} props.selectedOption - The current selected view option ('all-venues', 'favorites', 'bookings', etc.)
 * @param {Object} props.booking - The booking details if in booking view
 * @returns {JSX.Element|null} Rendered thumbnail card with venue details and conditional elements, or null if booking is outdated
 */
export default function Thumbnail({ venue, selectedOption, booking }) {
  const today = new Date();

  if (booking?.dateTo && isAfter(today, new Date(booking.dateTo))) {
    return null;
  }

  const formattedDateFrom =
    booking?.dateFrom &&
    !isNaN(new Date(booking.dateFrom)) &&
    format(new Date(booking.dateFrom), 'MMM do, yyyy'); 
  const formattedDateTo =
    booking?.dateTo &&
    !isNaN(new Date(booking.dateTo)) &&
    format(new Date(booking.dateTo), 'MMM do, yyyy'); 

  return (
    <figure className="w-full relative">
      <Link to={`/${venue.id}`}>
        <FigureImage media={venue.media[0]} />
        <FigureDescription venue={venue} />
      </Link>
      {selectedOption === 'all-venues' && <Actions venue={venue} />}
      {selectedOption === 'favorites' || selectedOption === undefined ? (
        <Favorite venue={venue} />
      ) : null}
      {selectedOption === 'bookings' && (
        <div className="absolute top-4 right-4 flex gap-3">
          {formattedDateFrom && formattedDateTo ? (
            <span className="bg-white h-10 px-3 2xl:px-4 flex items-center justify-center rounded text-xs 2xl:text-sm font-medium">
              {formattedDateFrom} - {formattedDateTo}
            </span>
          ) : (
            <span className="bg-white h-10 px-3 2xl:px-4 flex items-center justify-center rounded text-xs 2xl:text-sm font-medium">
              Dates unavailable
            </span>
          )}
        </div>
      )}

      {(selectedOption === undefined || selectedOption === 'favorites') &&
        venue.rating > 4 && <GuestFavorite />}
    </figure>
  );
}