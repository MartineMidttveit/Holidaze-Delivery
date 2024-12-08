import useCurrencyFormatter from '../../../hooks/useCurrencyFormatter'
import BookingsUserTable from './BookingsUserTable'

export default function BookingsForOwner({ data }) {
  const price = useCurrencyFormatter(data.price)
  const howManyPersonBooked = data.bookings.length
  return (
    <div className="bg-white my-8 xl:my-10 rounded-lg shadow-lg py-8 px-6 md:p-10 lg:p-12">
      <h2 className="md:text-lg pb-3">
        Bookings for <span className="font-semibold">{data.name}</span>:
      </h2>

      <p className="text-sm font-bold md:text-base lg:text-lg pt-1 lg:pt-2">
        {price}
        <span className="text-secondary font-normal"> / night</span>
      </p>

      <strong className="block my-4 text-sm 2xl:text-base">
        {howManyPersonBooked === 0 ? (
          <span className="font-medium">No bookings yet!</span>
        ) : (
          <>
            {howManyPersonBooked}{' '}
            {howManyPersonBooked > 1 ? 'people' : 'person'}{' '}
            <span className="font-normal">have booked this venue.</span>
          </>
        )}
      </strong>

      {howManyPersonBooked >= 1 && <BookingsUserTable data={data} />}
    </div>
  )
}
