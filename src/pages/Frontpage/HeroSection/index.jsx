import HeroMedia from "./HeroMedia";
import Search from "./Search";
import SelectDate from "./SelectDate";
import SelectGuests from "./SelectGuests";
import { useReducer } from "react";
import reducer from "./reducer";

export default function HeroSection({ onApplyFilters }) {
  const [state, dispatch] = useReducer(reducer, {
    adults: 0,
    children: 0,
    guests: 0,
    query: "",
    checkIn: null,
    checkOut: null,
  });
  function handleApplyFilters(e) {
    e.preventDefault();
    onApplyFilters(state);
  }

  return (
    <div className="w-full h-[38rem] md:h-[40rem] lg:h-[36rem] xl:h-[40rem] 2xl:h-[50rem] relative">
      <div className="flex items-center justify-center w-full">
        <div className="absolute top-[18%] sm:top-[15%] md:top-[20%] lg:top-[36%] xl:top-[40%] flex flex-col text-center text-3xl sm:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-white">
          <span>FIND YOUR</span>
          <span>DREAM DESTINATION</span>
        </div>

        <div className="absolute h-fit py-10 lg:h-[28%] xl:h-[23%] w-full sm:w-[90%] lg:w-[86%] bg-background bottom-[10%] sm:bottom-6 md:bottom-10 lg:bottom-16 sm:rounded-lg flex px-[2%] sm:px-0">
          <form
            className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 items-center w-full gap-3 px-5 sm:px-10 xl:px-14 2xl:px-20 z-10"
            onSubmit={handleApplyFilters}
          >
            <Search dispatch={dispatch} />
            <SelectDate dispatch={dispatch} state={state} />

            <div className="flex gap-3">
              <SelectGuests state={state} dispatch={dispatch} />
              <button className="mt-7 md:mt-8 text-sm 2xl:text-base rounded px-3 lg:px-8 bg-contrast text-white h-12 flex items-center justify-center gap-2">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <HeroMedia />
    </div>
  );
}
