/**
 * Calculates the number of days between two dates
 * @param {Date} startDate - The starting date
 * @param {Date} endDate - The ending date
 * @returns {number} Number of days between the dates, rounded to nearest day. Returns 0 if either date is missing.
 */
export default function getNumberOfDays(startDate, endDate) {
  if (!startDate || !endDate) return 0;

  const difference = endDate.getTime() - startDate.getTime();
  return Math.round(difference / (1000 * 60 * 60 * 24));
}
