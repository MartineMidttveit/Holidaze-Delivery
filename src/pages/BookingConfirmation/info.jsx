import {format} from "date-fns";

export default function Info({
  bookingData,
  howManyAdults,
  howManyChildren,
  price,
}) {
  return (
    <>
      <div className="flex items-center justify-between border-b border-secondary border-opacity-40 p-6">
        <div className="flex flex-col gap-y-1">
          <h2 className="font-semibold">Check in:</h2>
          <p className="2xl:text-xl">
            {format(new Date(bookingData.dateFrom), 'dd.MM.yyyy')}
          </p>
          <p>at {format(new Date(bookingData.dateFrom), 'HH:mm a')}</p>
        </div>
        <span>-</span>
        <div className="flex flex-col gap-y-1">
          <h2 className="font-semibold">Check out:</h2>
          <p className="xl:text-xl">
            {format(new Date(bookingData.dateTo), 'dd.MM.yyyy')}
          </p>
          <p>at {format(new Date(bookingData.dateTo), 'HH:mm a')}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-secondary border-opacity-40 bg-background p-6">
        <h2 className="font-semibold">Guests:</h2>
        <p className="xl:text-xl flex gap-2 items-end">
          {bookingData.guests}{' '}
          <span className="text-secondary text-base">
            ( {howManyAdults} {howManyAdults > 1 ? 'adults' : 'adult'},{' '}
            {howManyChildren} {howManyChildren > 1 ? 'children' : 'child'} )
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-2 border-b border-secondary border-opacity-40 p-6">
        <div className="flex justify-between">
          <h2 className="font-semibold">Amount:</h2>
          <button
            type="button"
            className="text-contrast font-medium text-sm xl:text-base"
            disabled
          >
            View receipt
          </button>
        </div>
        <p className="xl:text-xl flex gap-2 items-end">{price}</p>
      </div>

      <div className="flex flex-col gap-2 border-b border-secondary border-opacity-40 p-6 bg-background">
        <h2 className="font-semibold">Booking number:</h2>
        <p className="xl:text-xl flex gap-2 items-end">34S6DTFW1</p>
      </div>
    </>
  )
}
