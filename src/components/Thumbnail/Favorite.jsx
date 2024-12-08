import icons from '../../utils/icons'
import { useFavorites } from '../providers/Favorites'
export default function Favorite({ venue }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const ifFavorite = favorites.some(favorite => favorite.id === venue.id)

  function onClick() {
    ifFavorite ? removeFavorite(venue) : addFavorite(venue)
  }

  return (
    <button
      onClick={onClick}
      className="h-10 w-10 rounded absolute top-4 right-4 bg-white flex items-center justify-center"
      type="button"
    >
      <icons.heartIcon filled={ifFavorite} />
    </button>
  )
}
