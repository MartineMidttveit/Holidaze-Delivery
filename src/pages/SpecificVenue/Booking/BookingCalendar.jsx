import Datepicker from "react-tailwindcss-datepicker";
import getDisabledDates from "../../../utils/getDisabledDates";

export default function BookingCalendar({ bookings, dates, setDates }) {
  const today = new Date();
  const disabledDates = getDisabledDates(bookings);

  const handleDateChange = (newDates) => {
    if (!newDates?.startDate || !newDates?.endDate) {
      setDates(newDates);
      return;
    }

    const hasBookingBetween = bookings.some((booking) => {
      const bookingStart = new Date(booking.dateFrom);
      const bookingEnd = new Date(booking.dateTo);
      const selectedStart = new Date(newDates.startDate);
      const selectedEnd = new Date(newDates.endDate);

      return (
        (bookingStart >= selectedStart && bookingStart <= selectedEnd) ||
        (bookingEnd >= selectedStart && bookingEnd <= selectedEnd)
      );
    });

    if (!hasBookingBetween) {
      setDates(newDates);
    }
  };

  return (
    <form action="" className="flex flex-col md:flex-row w-full gap-4">
      <Datepicker
        minDate={today}
        placeholder="Check in → Check out"
        displayFormat="DD.MM.YYYY"
        startFrom={today}
        excludedDates={disabledDates}
        disabledDates={disabledDates}
        inputClassName="px-4 py-3.5 border-secondary border rounded text-sm placeholder-secondary w-full outline-none cursor-pointer"
        value={dates}
        onChange={handleDateChange}
        useRange={true}
        asSingle={false}
      />
    </form>
  );
}
