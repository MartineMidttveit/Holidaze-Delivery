import icons from "../../utils/icons";

export default function Facilities({ data }) {
  return (
    <div className="flex flex-col xl:pb-6 2xl:pb-8">
      <h2 className="font-bold md:text-lg pb-4">Facilities:</h2>

      <div className="flex flex-col gap-1 xl:gap-2 text-sm md:text-base">
        <div className="flex items-center gap-3">
          {data.meta.wifi ? <icons.checkIcon /> : <icons.roundedXIcon />}
          <span>Wi-fi available</span>
        </div>

        <div className="flex items-center gap-3">
          {data.meta.pets ? <icons.checkIcon /> : <icons.roundedXIcon />}
          <span>Pets allowed</span>
        </div>

        <div className="flex items-center gap-3">
          {data.meta.parking ? <icons.checkIcon /> : <icons.roundedXIcon />}
          <span>Parking available</span>
        </div>

        <div className="flex items-center gap-3">
          {data.meta.breakfast ? <icons.checkIcon /> : <icons.roundedXIcon />}
          <span>Breakfast included</span>
        </div>
      </div>
    </div>
  );
}
