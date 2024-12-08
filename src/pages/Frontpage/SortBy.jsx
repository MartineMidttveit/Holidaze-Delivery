import icons from "../../utils/icons";

export default function SortBy({ setSortBy }) {
  function handleSortBy(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="relative inline-block w-fit">
      <select
        onChange={handleSortBy}
        name="sortBy"
        id="sortBy"
        className="relative h-12 2xl:h-14 px-3 2xl:px-4 rounded border border-secondary outline-none appearance-none w-full min-w-56 lg:min-w-72"
      >
        <option defaultValue={"All venues"} className="px-2 w-full">
          All venues
        </option>
        <option value="Most popular" className="w-full">
          Most popular
        </option>
        <option value="Recent venues" className="w-full">
          Recent venues
        </option>
        <option value="Title A-Z" className="w-full">
          Title A-Z
        </option>
        <option value="Title Z-A" className="w-full">
          Title Z-A
        </option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <icons.chevronDown />
      </div>
    </div>
  );
}
