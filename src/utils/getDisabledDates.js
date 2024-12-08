/**
 * Converts booking dates into a format for disabled date ranges
 * @param {Array} bookings - Array of booking objects containing dateFrom and dateTo
 * @returns {Array} Array of objects with startDate and endDate representing disabled date ranges
 */
export default function getDisabledDates(bookings) {
  if (!bookings) return [];

  return bookings.map((booking) => ({
    startDate: booking.dateFrom,
    endDate: booking.dateTo,
  }));
}
