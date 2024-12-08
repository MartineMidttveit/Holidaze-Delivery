/**
 * Generates or retrieves location information with fallback to random values
 * @param {Object} data - Input data object
 * @param {Object} [data.location] - Location object within data
 * @param {string} [data.location.address] - Street address
 * @param {string} [data.location.country] - Country name
 * @param {string} [data.location.continent] - Continent name
 * @returns {Object} Location info object containing address, country and continent
 * @returns {string} returns.address - Street address (real or randomly generated)
 * @returns {string} returns.country - Country name (real or randomly generated)
 * @returns {string} returns.continent - Continent name (real or randomly generated)
 */
export default function locationInfo(data) {
  const randomAddresses = [
    "Mississippi Road 234",
    "Broadway Avenue 789",
    "Baker Street 221B",
    "Rue de Rivoli 101",
    "Unter den Linden 5",
    "Shibuya Crossing 10",
    "Via della Conciliazione 7",
    "Avenida Paulista 1500",
    "Church Street 55",
    "Orchard Road 320",
    "Champs-Élysées 22",
    "Red Square 1",
    "Zhongshan Road 88",
    "Plaza Mayor 9",
    "Kingsway 300",
    "Cape Point 12",
    "Freedom Square 15",
    "Manhattan Avenue 120",
    "Lakeshore Drive 600",
  ];

  const randomCountries = [
    "Norway",
    "USA",
    "Japan",
    "Germany",
    "Australia",
    "South Africa",
    "Brazil",
    "Canada",
    "India",
    "Mexico",
  ];

  const continents = [
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "Oceanea",
    "South America",
  ];

  const address =
    data?.location?.address ||
    randomAddresses[Math.floor(Math.random() * randomAddresses.length)];
  const country =
    data?.location?.country ||
    randomCountries[Math.floor(Math.random() * randomCountries.length)];
  const continent =
    data?.location?.continent ||
    continents[Math.floor(Math.random() * continents.length)];

  return { address, country, continent };
}
