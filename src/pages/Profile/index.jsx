import {useState} from 'react'
import {useQuery} from '@tanstack/react-query'
import {isPast} from 'date-fns'
import storage from '../../api/helpers/storage'
import getProfile from '../../api/requests/getProfile'
import getProfileVenues from '../../api/requests/getProfileVenues.js'
import getProfileBookings from '../../api/requests/getProfileBookings.js'
import ProfileHeader from './profileHeader'
import SelectOptions from './selectOptions'
import VenuesList from './venuesList'
import LoadingIndicator from '../../components/LoadingIndicator.jsx'

const Profile = () => {
  const isManager = storage.get('user_is_manager')
  const username = storage.get('profile_name')
  const token = storage.get('auth_token')
  const favorites = storage.get('favorites')
  const [selectedOption, setSelectedOption] = useState(
    isManager ? 'all-venues' : 'past-stays'
  )

  const { data: userData, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(username, token),
  })

  const { data: userVenues } = useQuery({
    queryKey: ['user-venues'],
    queryFn: () => getProfileVenues(username),
  })

  const { data: userBookings } = useQuery({
    queryKey: ['user-bookings'],
    queryFn: () => getProfileBookings(username),
  })

  if (isLoading || !Array.isArray(userVenues)) return <LoadingIndicator />

  const filteredVenues = () => {
    switch (selectedOption) {
      case 'bookings':
        return userBookings
          ?.filter(booking => booking.venue)
          ?.map(booking => booking.venue)
      case 'favorites':
        return favorites ?? []
      case 'past-stays':
        return userBookings
          ?.filter(booking => booking.venue && isPast(new Date(booking.dateTo)))
          ?.map(booking => booking.venue)
      default:
        return userVenues ?? []
    }
  }

  const renderLabel = () => {
    switch (selectedOption) {
      case 'bookings':
        return 'Bookings'
      case 'favorites':
        return 'Favorites'
      case 'past-stays':
        return 'Past stays'
      default:
        return 'Venues'
    }
  }

  return (
    <>
      <ProfileHeader userData={userData} isManager={isManager} />

      <div className="px-[5%] lg:px-[7%] 2xl:px-[10%] flex items-center bg-background py-[2%]">
        <div className="space-y-10 w-full pb-10">
          <div className="flex  justify-between sm:flex-row flex-col gap-5 pt-5 sm:pt-0">
            <h2 className="lg:text-lg font-semibold pr-8 capitalize">
              {username === userData.name ? 'Your' : username}{' '}
              {renderLabel(selectedOption)} ({filteredVenues()?.length ?? 0})
            </h2>
            {username === userData.name && (
              <SelectOptions
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                isManager={isManager}
              />
            )}
          </div>
          <VenuesList
            selectedOption={selectedOption}
            userBookings={userBookings}
            filteredVenues={filteredVenues()}
          />
        </div>
      </div>
    </>
  )
}

export default Profile
