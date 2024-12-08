import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import icons from "../../../utils/icons";

export default function Guests({ state, dispatch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize from URL on mount
  useEffect(() => {
    const adultsFromURL = searchParams.get("adults");
    const childrenFromURL = searchParams.get("children");

    if (adultsFromURL && Number(adultsFromURL) !== state.adults) {
      dispatch({
        type: "set-adults",
        payload: Number.parseInt(adultsFromURL, 10),
      });
    }
    if (childrenFromURL && Number(childrenFromURL) !== state.children) {
      dispatch({
        type: "set-children",
        payload: Number.parseInt(childrenFromURL, 10),
      });
    }
  }, []);

  // Update URL when state changes
  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams);
    const newParams = new URLSearchParams(currentParams);

    newParams.set("adults", state.adults);
    newParams.set("children", state.children);
    newParams.set("guests", state.adults + state.children);

    if (newParams.toString() !== searchParams.toString()) {
      setSearchParams(newParams);
    }
  }, [state.adults, state.children]);

  const handleIncrementAdults = () => {
    dispatch({ type: "increment-adults" });
  };

  const handleDecrementAdults = () => {
    dispatch({ type: "decrement-adults" });
  };

  const handleIncrementChildren = () => {
    dispatch({ type: "increment-children" });
  };

  const handleDecrementChildren = () => {
    dispatch({ type: "decrement-children" });
  };

  const totalGuests = state.adults + state.children;

  return (
    <div className="relative pb-8 border-b border-secondary border-opacity-40">
      <h3 className="text-sm md:text-base font-medium mb-4 pt-4">Guests</h3>
      <div
        className="h-12 border border-secondary rounded bg-white flex items-center pl-4 cursor-pointer text-sm md:text-base"
        onClick={() => setIsOpen((prevState) => !prevState)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen((prevState) => !prevState);
          }
        }}
      >
        {totalGuests} guests
        <div className="absolute right-4">
          <icons.chevronDown />
        </div>
      </div>

      {isOpen && (
        <div className="bg-white border border-secondary rounded py-2">
          <div className="flex items-center justify-between py-3 px-4">
            <div className="flex flex-col">
              Adults
              <span className="text-secondary font-medium text-sm">
                18+ years
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-full enabled:hover:bg-contrast enabled:hover:border-contrast enabled:hover:text-white duration-300 border size-8 disabled:cursor-not-allowed disabled:opacity-75"
                onClick={handleDecrementAdults}
                disabled={state.adults === 0}
              >
                -
              </button>
              <span className="text-sm">{state.adults}</span>
              <button
                type="button"
                className="rounded-full hover:bg-contrast hover:border-contrast hover:text-white duration-300 border size-8"
                onClick={handleIncrementAdults}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 px-4">
            <div className="flex flex-col">
              Children
              <span className="text-secondary font-medium text-sm">
                0-17 years
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-full enabled:hover:bg-contrast enabled:hover:border-contrast enabled:hover:text-white duration-300 border size-8 disabled:cursor-not-allowed disabled:opacity-75"
                onClick={handleDecrementChildren}
                disabled={state.children === 0}
              >
                -
              </button>
              <span className="text-sm">{state.children}</span>
              <button
                type="button"
                className="rounded-full hover:bg-contrast hover:border-contrast hover:text-white duration-300 border size-8"
                onClick={handleIncrementChildren}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
