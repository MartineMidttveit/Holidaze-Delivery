import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getVenue from "../../api/requests/getVenue";
import Thumbnail from "../../components/Thumbnail";
import SortBy from "./SortBy";
import Button from "../../components/Button";
import icons from "../../utils/icons";
import Filtered from "./Filter";
import sortVenues from "../../utils/sortVenues";
import Skeleton from "../../components/Thumbnail/Skeleton";
import HeroSection from "./HeroSection";
import ErrorComponent from "../../components/Error/index.jsx";

export default function Frontpage() {
  const [sortBy, setSortBy] = useState("All venues");
  const [filterParams, setFilterParams] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["venues", filterParams],
    queryFn: () => getVenue(),
  });

  const params = useMemo(() => {
    const searchParams = new URLSearchParams(filterParams);
    return {
      continents: searchParams.get("continents")?.split(",") || [],
      countries: searchParams.get("countries")?.split(",") || [],
      guests: Number(searchParams.get("guests")) || null,
      rating: Number(searchParams.get("rating")) || null,
      priceMin: Number(searchParams.get("priceMin")) || null,
      priceMax: Number(searchParams.get("priceMax")) || null,
      facilities: searchParams.get("facilities")?.split(",") || [],
      checkIn: searchParams.get("checkIn") || null,
      checkOut: searchParams.get("checkOut") || null,
      query: searchParams.get("query") || null,
    };
  }, [filterParams]);

  const filteredData = useMemo(() => {
    if (!data) return [];

    return data.filter((venue) => {
      const matchesContinent =
        params.continents.length === 0 ||
        (venue.location.continent &&
          params.continents.includes(venue.location.continent));

      const matchesCountry =
        params.countries.length === 0 ||
        params.countries.includes(venue.location.country);

      const matchesGuests = !params.guests || params.guests === venue.maxGuests;

      const matchesRating = !params.rating || params.rating === venue.rating;

      const matchesPrice =
        (!params.priceMin || venue.price >= params.priceMin) &&
        (!params.priceMax || venue.price <= params.priceMax);

      const matchesFacilities =
        params.facilities.length === 0 ||
        params.facilities.every(
          (facility) => venue.meta[facility.toLowerCase()]
        );

      const isAvailable =
        !params.checkIn ||
        !params.checkOut ||
        !venue.bookings?.some((booking) => {
          const bookingStart = new Date(booking.dateFrom);
          const bookingEnd = new Date(booking.dateTo);

          const [checkInDay, checkInMonth, checkInYear] =
            params.checkIn.split(".");
          const [checkOutDay, checkOutMonth, checkOutYear] =
            params.checkOut.split(".");

          const checkIn = new Date(checkInYear, checkInMonth - 1, checkInDay);
          const checkOut = new Date(
            checkOutYear,
            checkOutMonth - 1,
            checkOutDay
          );

          return (
            (checkIn >= bookingStart && checkIn <= bookingEnd) ||
            (checkOut >= bookingStart && checkOut <= bookingEnd) ||
            (checkIn <= bookingStart && checkOut >= bookingEnd)
          );
        });

      const matchesQuery =
        !params.query ||
        venue.location?.country
          ?.toLowerCase()
          .includes(params?.query?.toLowerCase()) ||
        venue.location?.continent
          ?.toLowerCase()
          .includes(params?.query?.toLowerCase()) ||
        venue.location?.city
          ?.toLowerCase()
          .includes(params?.query?.toLowerCase());

      return (
        matchesContinent &&
        matchesCountry &&
        matchesGuests &&
        matchesRating &&
        matchesPrice &&
        matchesFacilities &&
        isAvailable &&
        matchesQuery
      );
    });
  }, [data, params]);

  const handleApplyFilters = (filters) => {
    const queryParams = new URLSearchParams();

    const hasGuests = filters.adults > 0 || filters.children > 0;

    for (const [key, value] of Object.entries(filters)) {
      if (key === "price" && value && typeof value === "object") {
        if (value.min) queryParams.append("priceMin", value.min);
        if (value.max) queryParams.append("priceMax", value.max);
      } else if (
        hasGuests &&
        (key === "adults" || key === "children" || key === "guests")
      ) {
        queryParams.append(key, value);
      } else if (key === "checkIn" || key === "checkOut") {
        if (value) {
          const displayDate = value.toLocaleDateString("no-NO");
          queryParams.append(key, displayDate);
        }
      } else if (value && (Array.isArray(value) ? value.length : value !== 0)) {
        queryParams.append(key, Array.isArray(value) ? value.join(",") : value);
      }
    }

    setFilterParams(queryParams.toString().replaceAll(",", "%2C"));
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${queryParams}`
    );
  };

  useEffect(() => {
    if (filterParams) return;
    const queryParams = new URLSearchParams(window.location.search);

    const continents = queryParams.get("continents")?.split(", ") || [];
    const countries = queryParams.get("countries")?.split(", ") || [];
    const adults = queryParams.get("adults")
      ? Number(queryParams.get("adults"))
      : 0;
    const children = queryParams.get("children")
      ? Number(queryParams.get("children"))
      : 0;
    const rating = queryParams.get("rating");
    const priceMin = queryParams.get("priceMin");
    const priceMax = queryParams.get("priceMax");
    const facilities = queryParams.get("facilities")?.split(", ") || [];

    handleApplyFilters({
      continents,
      countries,
      guests: adults + children,
      adults,
      children,
      rating,
      price: { min: priceMin, max: priceMax },
      facilities,
    });
  }, []);

  useEffect(() => {
    document.title = "Welcome to Holidaze!";
    const metaDescription = "Explore a wide range of beautiful venues to make your next vacation unforgettable. Find the perfect stay, from beach houses to mountain cabins.";
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute("content", metaDescription);
    } else {
      const metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content = metaDescription;
      document.head.appendChild(metaTag);
    }
  }, []);

  if (isLoading)
    return (
      <div className="px-[5%] lg:px-[7%] pb-[3%] mt-20 relative">
        <div className="gap-x-3 gap-y-5 2xl:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
          {Array.from({ length: 15 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      </div>
    );
  if (error) return <ErrorComponent />;

  const sortedVenues = sortVenues(filteredData, sortBy);

  return (
    <div className={`relative ${isFilterOpen ? "z-10" : "z-0"}`}>
      <HeroSection onApplyFilters={handleApplyFilters} />
      {isFilterOpen && (
        <>
          <Filtered
            onClose={() => setIsFilterOpen(false)}
            onApplyFilters={handleApplyFilters}
          />
          <div
            className="fixed inset-0 bg-black opacity-20 z-20"
            onClick={() => setIsFilterOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsFilterOpen(false);
              }
            }}
          />
        </>
      )}

      <div className="px-[5%] lg:px-[7%] pb-[3%] relative">
        <div className="py-8 flex justify-between">
          <Button
            variant="secondary"
            className="gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <icons.filterIcon />
            Filter
          </Button>
          <SortBy setSortBy={setSortBy} />
        </div>

        <div className="flex gap-6">
          {sortedVenues.length === 0 ? (
            <div className="text-center text-gray-500 w-full h-96 flex items-center justify-center">
              No venues found.
            </div>
          ) : (
            <div className="gap-x-3 gap-y-5 2xl:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
              {sortedVenues.map((venue) => (
                <Thumbnail key={venue.id} venue={venue} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
