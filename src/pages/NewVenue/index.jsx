import {useEffect} from 'react'
import Form from './form.jsx'

export default function NewVenue({ venue }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
