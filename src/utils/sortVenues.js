/**
 * Sorts an array of venue objects based on different criteria
 * @param {Array} venues - Array of venue objects to sort
 * @param {string} sortBy - Sort criteria ('All venues', 'Most popular', 'Recent venues', 'Title A-Z', 'Title Z-A')
 * @param {Object} venues[].created - Creation date of the venue
 * @param {number} venues[].rating - Rating score of the venue
 * @param {string} venues[].name - Name of the venue
 * @returns {Array} Sorted array of venue objects
 */
export default function sortVenues(venues, sortBy) {
  switch (sortBy) {
    case "All venues":
      return [...venues].sort(
        (a, b) => new Date(b.created) - new Date(a.created)
      );
    case "Most popular":
      return [...venues].sort((a, b) => b.rating - a.rating);
    case "Recent venues":
      return [...venues].sort(
        (a, b) => new Date(a.created) - new Date(b.created)
      );
    case "Title A-Z":
      return [...venues].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    case "Title Z-A":
      return [...venues].sort((a, b) =>
        b.name.toLowerCase().localeCompare(a.name.toLowerCase())
      );
    default:
      return venues;
  }
}
