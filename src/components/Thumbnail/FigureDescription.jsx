import randomLocation from '../../utils/randomLocation'
import useCurrencyFormatter from '../../hooks/useCurrencyFormatter'
import icons from '../../utils/icons'

export default function FigureDescription({ venue }) {
  const formattedLocation =
    venue.location?.city && venue.location?.country
      ? `${venue.location.city}, ${venue.location.country}`
      : randomLocation()
  const price = useCurrencyFormatter(venue.price)

  return (
    <figcaption className="pt-3">
      <h4 className="font-semibold">{venue.name}</h4>
      <p className="text-secondary text-sm font-medium my-1">
        {formattedLocation}
      </p>
      <p className="font-semibold">
        {price} <span className="font-normal">/ night</span>
      </p>

      <div className='mt-2.5 flex items-center gap-2'>
        <span title='Maximum amount of guests.' className='bg-gray-200 px-3 py-1 text-xs md:text-sm rounded'>{venue.maxGuests} guests</span>
        <span title='Rating from other users.' className='bg-gray-200 px-3 py-1 text-xs md:text-sm rounded flex items-center gap-1'>
          <icons.starIcon size={16}/>
          {venue.rating}
        </span>
      </div>

    </figcaption>
  )
}
