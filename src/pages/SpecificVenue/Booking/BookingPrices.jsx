export default function BookingPrices({ price, numNights }) {
  const totalPrice = Math.round(price * numNights);

  return (
    <>
      {numNights > 0 && (
        <div>
          <div className="flex flex-col border-b border-secondary pt-6 lg:pt-10 pb-4 lg:pb-6 text-secondary">
            <div className="flex justify-between">
              <p className="flex gap-4 pb-2">
                {price} NOK <span>x</span> <span>{numNights} nights</span>
              </p>
              <p>{totalPrice} NOK</p>
            </div>
            <div className="flex justify-between">
              <p className="flex gap-4">Service fee</p>
              <p>179 NOK</p>
            </div>
          </div>

          <div className="flex justify-between pt-4 lg:pt-6 font-medium">
            <p>Total:</p>
            <p>{totalPrice + 179} NOK</p>
          </div>
        </div>
      )}
    </>
  );
}
