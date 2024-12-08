import {useEffect} from 'react'
import Form from './form.jsx'

export default function NewVenue({ venue }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = venue ? 'Edit venue' : 'Create your venue now!'

    const metaDescription = venue
      ? 'Update your venue details on Holidaze! Edit descriptions, photos, and availability to attract more bookings. Manage your listing with ease!'
      : 'List your venue on Holidaze! Reach travelers worldwide by creating a unique listing for your property. Start hosting today!'

    let metaDescriptionTag = document.querySelector('meta[name="description"]')
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta')
      metaDescriptionTag.name = 'description'
      document.head.appendChild(metaDescriptionTag)
    }

    metaDescriptionTag.setAttribute('content', metaDescription)
  }, [venue])

  return (
    <div className="bg-background">
      <div className="bg-white w-full md:w-5/6 lg:w-3/4 xl:w-2/3 2xl:w-2/3 3xl:w-1/2 mx-auto px-[8%] lg:px-[10%] xl:px-[12%] py-[8%] lg:py-[2.5%]">
        <h1 className="text-xl font-semibold">
          {venue ? 'Edit Venue' : 'Create new venue'}
        </h1>
        <Form venue={venue} />
      </div>
    </div>
  )
}
