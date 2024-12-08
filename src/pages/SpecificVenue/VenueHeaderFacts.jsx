import {useFavorites} from '../../components/providers/Favorites';
import icons from '../../utils/icons';
import DeleteVenue from '../../components/Modals/DeleteVenue';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';
import HeartIcon from '../../components/SVG/HeartIcon';
import {useState} from 'react';

export default function VenueHeaderFacts({ data, isOwner }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const [isHovered, setIsHovered] = useState(false)

  const handleFavoriteClick = () => {
    if (isFavorite(data)) {
      removeFavorite(data)
    } else {
      addFavorite(data)
    }
  }

  return (
    <div className="py-[3%] xl:py-[2%] lg:pt-[4%]">
      <div className="flex justify-between font-medium text-sm gap-3 py-2 lg:py-0">
        <div className="flex gap-2">
          <div className="flex gap-2">
            <div className="flex items-center gap-2 border border-secondary px-3 lg:px-6 py-2 rounded text-sm 2xl:text-base">
              <icons.guestIcon />
              <p className="text-sm flex gap-1 items-center">
                {data.maxGuests} <span className="hidden lg:flex">guests</span>
              </p>
            </div>

            <div className="flex items-center gap-2 border border-secondary px-3 lg:px-6 py-2 rounded text-sm 2xl:text-base">
              <icons.ratingIcon />
              <p className="text-sm flex gap-1 items-center">
                {data.rating > 0
                  ? data.rating % 1 === 0
                    ? `${data.rating}.0`
                    : data.rating
                  : 'No rating'}
              </p>
            </div>
          </div>

          {isOwner ? (
            <div className="flex gap-2">
              <DeleteVenue
                id={data.id}
                trigger={
                  <Button variant="secondary" className="gap-2 2xl:text-sm">
                    <icons.deleteIcon />
                    <span className='hidden lg:flex'>Delete venue</span>
                  </Button>
                }
                isSpecific
              />
              <Link
                to="editVenue"
                className="text-sm gap-2 rounded px-3 lg:px-8 border border-secondary h-12 2xl:h-14 hover:bg-contrast duration-300 hover:text-white hover:border-contrast flex items-center justify-center"
              >
                <icons.editIcon />
                Edit venue
              </Link>
            </div>
          ) : (
            <button
              type="button"
              className="text-sm gap-2 rounded px-3 lg:px-8 border border-secondary h-12 2xl:h-14 hover:bg-white hover:shadow-md duration-300 flex items-center justify-center"
              onClick={handleFavoriteClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <HeartIcon filled={isFavorite(data) || isHovered} size={24} />
              <span className="hidden lg:flex">
                {isFavorite(data) ? 'In your favorites' : 'Add to favorites'}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
