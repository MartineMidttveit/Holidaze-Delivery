import { useState, useEffect } from "react";

import icons from "../../../utils/icons";

export default function SelectGuests({ state, dispatch }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const adultsFromURL = state.adults;
    const childrenFromURL = state.children;

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
    <div className="relative   border-opacity-40 w-full flex flex-col gap-2">
      <label className="text-sm md:text-base font-medium text-secondary">
        Guests
      </label>
      <div
        className="h-12 border border-secondary rounded bg-white flex items-center pl-4 cursor-pointer text-sm md:text-base w-full"
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
        <div className="absolute top-[90px] bg-white border border-secondary rounded py-2 w-full">
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
