export default function reducer(state, action) {
  switch (action.type) {
    case "set-query":
      return { ...state, query: action.payload };
    case "set-checkIn":
      return { ...state, checkIn: action.payload };
    case "set-checkOut":
      return {
        ...state,
        checkOut: action.payload,
      };
    case "increment-adults":
      return {
        ...state,
        adults: state.adults + 1,
        guests: state.adults + 1 + state.children,
      };
    case "decrement-adults":
      return {
        ...state,
        adults: state.adults > 0 ? state.adults - 1 : 0,
        guests: (state.adults > 0 ? state.adults - 1 : 0) + state.children,
      };
    case "increment-children":
      return {
        ...state,
        children: state.children + 1,
        guests: state.adults + state.children + 1,
      };
    case "decrement-children":
      return {
        ...state,
        children: state.children > 0 ? state.children - 1 : 0,
        guests: state.adults + (state.children > 0 ? state.children - 1 : 0),
      };
    case "set-adults":
      return {
        ...state,
        adults: action.payload,
        guests: action.payload + state.children,
      };
    case "set-children":
      return {
        ...state,
        children: action.payload,
        guests: state.adults + action.payload,
      };

    default:
      return state;
  }
}
