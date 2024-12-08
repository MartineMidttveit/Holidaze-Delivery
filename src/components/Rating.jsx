import StarRatings from "react-star-ratings";

/**
 * A star rating component that uses react-star-ratings
 * @param {Object} props - The component props
 * @param {Object} props.state - The state object containing the current rating
 * @param {number} props.state.rating - The current rating value
 * @param {Function} props.dispatch - Dispatch function to update the rating state
 * @returns {JSX.Element} Rendered star rating component
 */
export default function StarRating({ state, dispatch }) {
  const changeRating = (newRating) => {
    dispatch({ type: "rating", payload: newRating });
  };

  return (
    <StarRatings
      rating={state.rating || 0}
      starRatedColor="#1C1A1D"
      starHoverColor="#1C1A1D"
      changeRating={changeRating}
      numberOfStars={5}
      name="rating"
      starDimension="26px"
      starSpacing="2px"
      starEmptyColor="#AAAAAA"
    />
  );
}
