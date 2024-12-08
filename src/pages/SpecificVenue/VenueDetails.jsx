import React from 'react';
import icons from "../../utils/icons";
import locationInfo from '../../utils/locationInfo';

export default function VenueDetails({ data }) {
  const { address, country, continent } = locationInfo(data);

  return (
    <>
      <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-bold xl:mt-2 2xl:mt-0 capitalize">
        {data.name}
      </h1>
      <div className="flex gap-2 text-secondary pt-2 lg:pt-3 items-center">
        <icons.locationIcon />
        <p className="text-sm md:text-base capitalize">
          {address}, {country}, {continent}
        </p>
      </div>

      <img
        src="/map.jpg"
        alt=""
        className="object-cover mt-6 2xl:mt-8 w-full h-40 max-h-40 rounded-md"
      />

      <div className="flex flex-col gap-y-3 my-6 2xl:my-8">
        <h2 className="font-bold md:text-lg xl:pb-4">Description:</h2>
        <p className="text-sm md:text-base leading-relaxed">
          {data.description}
        </p>
      </div>
    </>
  );
}
