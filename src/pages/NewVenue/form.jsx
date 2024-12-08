import InputLabel from '../../components/InputLabel.jsx'
import Button from '../../components/Button.jsx'
import ImageLinksField from './imageLinksField.jsx'
import FacilitiesField from './facilitiesField.jsx'
import LocationFields from './locationFields.jsx'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import usePostRequest from '../../hooks/usePostRequest.js'
import usePutRequest from '../../hooks/usePutRequest.js'

export default function Form({ venue }) {
  const venueUrls = venue?.media?.map(img => img.url)
  const [imageLinks, setImageLinks] = useState(venueUrls ?? [])
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm()

  const { mutate: createVenue } = usePostRequest(
    'https://v2.api.noroff.dev/holidaze/venues',
    {
      onSuccess: createdVenue => {
        reset()
        navigate(`/${createdVenue.data.id}`)
      },
    }
  )

  const { mutate: editVenue } = usePutRequest(
    `https://v2.api.noroff.dev/holidaze/venues/${venue?.id}`,
    {
      onSuccess: () => {
        reset()
        navigate(`/${venue?.id}`)
      },
    }
  )

  const onSubmit = data => {
    const formattedData = {
      name: data.venueTitle,
      description: data.description,
      media: imageLinks.map(url => ({
        url,
        alt: `Image of ${data.venueTitle || 'venue'}`,
      })),
      price: Number(data.price),
      maxGuests: Number(data.guests),
      rating: Number(data.rating || 0),
      meta: {
        wifi: !!data.wifi,
        parking: !!data.parking,
        breakfast: !!data.breakfast,
        pets: !!data.pets,
      },
      location: {
        address: data.address || null,
        city: data.city || null,
        zip: data.postalZIP || null,
        country: data.country || null,
        continent: data.continent || null,
        lat: 0,
        lng: 0,
      },
    }

    venue ? editVenue(formattedData) : createVenue(formattedData)
  }

  return (
    <form
      className="flex flex-col gap-4 pt-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputLabel
        name="venueTitle"
        type="text"
        label="Title:"
        register={register}
        defaultValue={venue?.name}
        required={true}
      />

      <ImageLinksField
        imageLinks={imageLinks}
        setImageLinks={setImageLinks}
        register={register}
      />

      <InputLabel
        name="description"
        type="textarea"
        label="Description:"
        register={register}
        defaultValue={venue?.description}
      />

      <LocationFields register={register} venue={venue} />

      <FacilitiesField register={register} venue={venue} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full pb-4">
        <div className="flex flex-col">
          <label
            htmlFor="rating"
            className="text-sm 2xl:text-base font-medium text-secondary mb-2"
          >
            Rating:
          </label>
          <input
            className="w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
            name="rating"
            type="number"
            defaultValue={venue?.rating}
            required={true}
            {...register('rating', {
              min: {
                value: 1,
                message: 'Rating must be at least 1',
              },
              max: {
                value: 5,
                message: 'Rating cannot be greater than 5',
              },
              valueAsNumber: true,
            })}
          />
          {errors?.rating && (
            <p className="text-red-500 text-sm">{errors?.rating?.message}</p>
          )}
        </div>
        <InputLabel
          name="guests"
          type="number"
          label="Max guests:"
          register={register}
          defaultValue={venue?.maxGuests}
          required={true}
        />

        <div className="col-span-2 md:col-span-2 flex flex-col">
          <label
            htmlFor="price"
            className="text-sm 2xl:text-base font-medium text-secondary mb-2"
          >
            Price:
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              required
              id="price"
              defaultValue={venue?.price}
              className="w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
              {...register('price', {
                required: 'Price is required',
                min: {
                  value: 1,
                  message: 'Price must be at least 1',
                },
                max: {
                  value: 10000,
                  message: 'Price cannot exceed 10,000',
                },
                validate: value => {
                  const numericValue = Number(value)
                  return numericValue <= 10000 || 'Price must not exceed 10,000'
                },
                onChange: e => {
                  const value = e.target.value
                    .replace(/[^0-9]/g, '')
                    .replace(/^0+/, '')
                    .slice(0, 5)
                  setValue('price', value)
                },
              })}
            />

            <span className="text-secondary text-sm">/</span>
            <p className="text-secondary text-sm font-medium">night</p>
          </div>

          {errors?.price?.message && (
            <p className="text-red-500 text-sm">{errors?.price?.message}</p>
          )}
        </div>
      </div>

      <div className="flex gap-3 mt-3 mb-6">
        <Button variant="third" onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button type="submit" disabled={imageLinks.length === 0}>
          {venue ? 'Save changes' : 'Create venue'}
        </Button>
      </div>
    </form>
  )
}
