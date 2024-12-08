import CheckboxLabel from '../../components/CheckboxLabel.jsx'

export default function FacilitiesField({ register, venue }) {
  return (
    <div className="flex flex-col pb-4 gap-2">
      <h2 className="text-sm 2xl:text-base font-medium text-secondary mb-2">Facilities:</h2>
      <CheckboxLabel
        name="wifi"
        label={'Wi-Fi'}
        register={register}
        defaultValue={!!venue?.meta?.wifi}
      />
      <CheckboxLabel
        name="parking"
        label={'Parking'}
        register={register}
        defaultValue={!!venue?.meta?.parking}
      />
      <CheckboxLabel
        name="pets"
        label={'Pets allowed'}
        register={register}
        defaultValue={!!venue?.meta?.pets}
      />
      <CheckboxLabel
        name="breakfast"
        label={'Breakfast included'}
        register={register}
        defaultValue={!!venue?.meta?.breakfast}
      />
    </div>
  )
}
