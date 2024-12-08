export default function BookingHeader({ price }) {
  return (
    <div className="font-bold 2xl:text-xl pb-4 2xl:pb-6">
      <h2 className="md:text-lg pb-3">Make a reservation:</h2>
      <p className="text-sm md:text-base lg:text-lg pt-1 lg:pt-2">
        {price}
        <span> NOK </span>
        <span className="text-secondary font-normal">/ night</span>
      </p>
    </div>
  );
}
