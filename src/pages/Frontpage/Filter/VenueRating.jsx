import StarRating from "../../../components/Rating";

export default function VenueRating({ state, dispatch }) {
  return (
    <div className="flex flex-col py-6 border-t border-secondary border-opacity-40">
      <h3 className="text-sm md:text-base font-medium pb-2">Rating:</h3>

      <div className="flex items-center gap-3 text-sm md:text-base">
        <StarRating state={{ rating: state }} dispatch={dispatch} />
        {state > 0 ? <p>{state} stars</p> : <p>not rated</p>}
      </div>
    </div>
  );
}
