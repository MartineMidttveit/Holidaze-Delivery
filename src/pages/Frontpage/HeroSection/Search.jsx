import InputLabel from "../../../components/InputLabel";

export default function Search({ dispatch }) {
  function handleChange(e) {
    dispatch({ type: "set-query", payload: e.target.value });
  }

  return (
    <InputLabel
      name="destination"
      type="text"
      label="Where do you want to go?"
      placeholder="E.g. Spain, Italy, California..."
      onChange={handleChange}
    />
  );
}
