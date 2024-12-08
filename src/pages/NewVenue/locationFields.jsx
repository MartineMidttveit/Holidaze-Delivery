import InputLabel from '../../components/InputLabel.jsx'

export default function LocationFields({ register, venue }) {
  return (
    <div>
      <div className="flex gap-3 w-full pb-4">
        <InputLabel
          name="continent"
          type="text"
          label="Continent:"
          register={register}
          defaultValue={venue?.location?.continent}
          required={true}
        />
        <InputLabel
          name="country"
          type="text"
          label="Country:"
          register={register}
          defaultValue={venue?.location?.country}
          required={true}
        />
      </div>

      <div className="flex gap-3 w-full pb-4">
        <InputLabel
          name="city"
          type="text"
          label="City:"
          register={register}
          defaultValue={venue?.location?.city}
          required={true}
        />
        <InputLabel
          name="postalZIP"
          type="text"
          label="Postal ZIP code:"
          register={register}
          defaultValue={venue?.location?.zip}
          required={true}
        />
      </div>

      <InputLabel
        name="address"
        type="text"
        label="Address:"
        register={register}
        defaultValue={venue?.location?.address}
        required={true}
      />
    </div>
  )
}
