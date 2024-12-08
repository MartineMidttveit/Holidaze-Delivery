import Modal from './Modal'
import icons from '../../utils/icons'
import Button from '../Button'
import useDeleteRequest from '../../hooks/useDeleteRequest'
import {toast} from 'sonner'
import storage from '../../api/helpers/storage.js'
import {useEffect} from 'react'

export default function DeleteVenue({ trigger, id = '', isSpecific = false }) {
  const { mutate } = useDeleteRequest(
    `https://v2.api.noroff.dev/holidaze/venues/${id}`,
    {
      onSuccess: () => {
        storage.save('venueDeleted', 'true')
        window.location.reload()
        if (isSpecific) window.location.href = '/profile'
      },
      onError: error => {
        toast.error(error?.message || 'Failed to delete venue')
      },
    }
  )

  useEffect(() => {
    const venueDeleted = localStorage.getItem('venueDeleted')
    if (venueDeleted && !isSpecific) {
      toast.success('Venue deleted successfully')
      localStorage.removeItem('venueDeleted')
    }
  }, [])

  return (
      <Modal
        button={trigger}
        actionButton={
          <Button variant="secondary" onClick={() => mutate(id)}>
            Delete venue
          </Button>
        }
      >
        <div className="h-20 w-20 lg:h-24 lg:w-24 bg-customLightBlue flex items-center justify-center rounded-full mb-4 lg:mb-6 mx-auto">
          <icons.deleteIconBig />
        </div>

        <h2 className="md:text-lg lg:text-xl font-bold text-center">
          You are about to delete your venue
        </h2>
        <p className="pt-4 lg:pt-5 text-sm md:text-base  text-center">
          This is a destructive action, and its not possible to undo it.
        </p>
        <p className="pb-4 lg:pb-6 text-sm md:text-base  text-center">
          Are you sure that you want to proceed?
        </p>
      </Modal>
  )
}
