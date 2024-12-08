/* import InputLabel from "../../../components/InputLabel"; */
import Datepicker from "react-tailwindcss-datepicker";

export default function SelectDate({ dispatch, state }) {
  const today = new Date();
  return (
    <div className="flex flex-col gap-2 relative z-50 ">
      <label
        htmlFor="checkInOut"
        className="text-sm 2xl:text-base font-medium text-secondary"
      >
        When are you travelling?
      </label>
      <Datepicker
        inputClassName="border w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12 placeholder:text-sm "
        placeholder="Check in → Check out"
        minDate={today}
        displayFormat="DD.MM.YYYY"
        startFrom={today}
        useRange={true}
        value={{
          startDate: state.checkIn,
          endDate: state.checkOut,
        }}
        onChange={(e) => {
          dispatch({
            type: "set-checkIn",
            payload: e.startDate,
          });
          dispatch({
            type: "set-checkOut",
            payload: e.endDate,
          });
        }}
      />
    </div>
  );
}
