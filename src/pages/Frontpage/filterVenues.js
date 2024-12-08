export default function filterVenues(venues, params) {
  if (!venues) return [];
  if (!params || Object.values(params).every((value) => value === null))
    return venues;

  const filtered = venues.filter((venue) => {
    if (params.guests && venue.maxGuests < params.guests) return false;
    if (params.rating && venue.rating < params.rating) return false;
    if (
      (params.priceMin || params.priceMax) &&
      (venue.price < params.priceMin || venue.price > params.priceMax)
    )
      return false;
    if (params.facilities) {
      const facilities = params.facilities.split(",");
      if (facilities.some((f) => !venue.meta[f])) return false;
    }

    return true;
  });

  return filtered;
}
