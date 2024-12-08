import {useParams} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import NewVenue from '../NewVenue'
import getVenueById from '../../api/requests/getVenueById.js'
import LoadingIndicator from "../../components/LoadingIndicator.jsx";
import ErrorComponent from "../../components/Error/index.jsx";

export default function EditVenue() {
  const { venueId } = useParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ['venues'],
    queryFn: () => getVenueById(venueId),
  })

  if (isLoading) return <LoadingIndicator />
  if (error) return <ErrorComponent />

  return <NewVenue venue={data} />
}
