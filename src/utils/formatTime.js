/**
 * Formats a date string into a standardized date and time format
 * @param {string|Date} date - The date to format
 * @returns {Object} Formatted date and time
 * @returns {string} returns.date - Date in DD.MM.YYYY format
 * @returns {string} returns.time - Time in 24-hour HH:MM format
 */
export default function formatTime(date) {
  const dateObj = new Date(date);

  const formattedDate = dateObj.toLocaleDateString("en-GB").replace(/\//g, ".");

  const formattedTime = dateObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return { date: formattedDate, time: formattedTime };
}
