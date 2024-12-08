import {useEffect} from 'react'
import {useQuery} from '@tanstack/react-query'
import {useParams} from 'react-router-dom'
import VenueMedia from './VenueMedia'
import VenueHeaderFacts from './VenueHeaderFacts'
import VenueDetails from './VenueDetails'
import Facilities from './Facilities'
import {VenueDateInfoDesktop, VenueDateInfoMobile} from './VenueDateInfo'
import HostDetails from './HostDetails'
import Booking from './Booking'
import useIsOwner from '../../hooks/useIsOwner'
import getVenueById from '../../api/requests/getVenueById.js'
import LoadingIndicator from '../../components/LoadingIndicator.jsx'
import ErrorComponent from '../../components/Error'

export default function SpecificVenue() {
  const { venueId } = useParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ['venues'],
    queryFn: () => getVenueById(venueId),
  })

  const ownerEmail = data?.owner?.email ?? ''
  const isOwner = useIsOwner(ownerEmail)

  useEffect(() => {
    document.title = data?.name
    scrollTo(0, 0)
  }, [data])

  if (isLoading) return <LoadingIndicator />
  if (error) return <ErrorComponent />

  return (
    <main className="bg-background text-primary font-poppins relative pb-4 md:pb-8 lg:pb-12">
      <VenueMedia media={data.media} />
      <div className="px-[5%] lg:px-[7%] 2xl:px-[15%] lg:w-3/4 xl:w-full mx-auto">
        <VenueHeaderFacts data={data} isOwner={isOwner} />
        <div className="flex flex-col xl:flex-row justify-between xl:gap-[7%] 2xl:gap-[10%]">
          <section className="w-full xl:w-1/2 2xl:max-w-2xl">
            <VenueDetails data={data} />
            <Facilities data={data} />
            <VenueDateInfoDesktop data={data} />
          </section>
          <div className="w-full xl:w-1/2 2xl:max-w-3xl">
            <HostDetails data={data} isOwner={isOwner} />
            <Booking data={data} isOwner={isOwner} />
          </div>
        </div>
        <VenueDateInfoMobile data={data} />
      </div>
    </main>
  )
}
