/**
 * Returns a random location from a predefined list of cities and countries
 * @returns {string} A randomly selected location in the format "City, Country"
 */
export default function randomLocation() {
  const allLocations = [
    "Oslo, Norge",
    "Berlin, Germany",
    "San Fransisco, USA",
    "Zürich, Switzerland",
    "Kulusuk, Greenland",
    "São Paulo, Brazil",
    "Athens, Greece",
    "Rome, Italy",
    "Los Angeles, USA",
    "Tokyo, Japan",
    "London, UK",
    "Istanbul, Turkey",
    "Seattle, USA",
    "Bologna, Italy",
    "Barcelona, Spain",
    "Paris, France",
    "Chicago, USA",
    "Hamburg, Germany",
    "Plymouth, UK",
    "Venize, Italy",
    "Bergen, Norge",
    "Crete, Greece",
  ];
  const location =
    allLocations[Math.floor(Math.random() * allLocations.length)];
  return location;
}
