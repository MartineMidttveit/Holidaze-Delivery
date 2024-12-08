import icons from "../../../utils/icons";
import CheckList from "./CheckList";
import {continentData, countryData, facilitiesData,} from "../../../utils/data/filterData";
import Guests from "./Guests";
import {useEffect, useReducer, useState} from "react";
import PriceRange from "./PriceRange";
import VenueRating from "./VenueRating";
import Button from "../../../components/Button";

export default function Filtered({ onClose, onApplyFilters }) {
  const [isVisible, setIsVisible] = useState(false)
  const params = {}

  function reducer(state, action) {
    switch (action.type) {
      case 'increment-adults':
        return {
          ...state,
          adults: state.adults + 1,
          guests: state.adults + 1 + state.children,
        }
      case 'decrement-adults':
        return {
          ...state,
          adults: state.adults > 0 ? state.adults - 1 : 0,
          guests: (state.adults > 0 ? state.adults - 1 : 0) + state.children,
        }
      case 'increment-children':
        return {
          ...state,
          children: state.children + 1,
          guests: state.adults + state.children + 1,
        }
      case 'decrement-children':
        return {
          ...state,
          children: state.children > 0 ? state.children - 1 : 0,
          guests: state.adults + (state.children > 0 ? state.children - 1 : 0),
        }
      case 'set-adults':
        return {
          ...state,
          adults: action.payload,
          guests: action.payload + state.children,
        }
      case 'set-children':
        return {
          ...state,
          children: action.payload,
          guests: state.adults + action.payload,
        }
      case 'price':
        return {
          ...state,
          price: { min: action.payload[0], max: action.payload[1] },
        }
      case 'rating':
        return { ...state, rating: action.payload }
      case 'facilities':
        return { ...state, facilities: action.payload }
      case 'continents':
        return { ...state, continents: action.payload }
      case 'countries':
        return { ...state, countries: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    price: { min: params.priceMin || 0, max: params.priceMax || 10000 },
    adults: Number(params.adults) || 0,
    children: Number(params.children) || 0,
    guests: (Number(params.adults) || 0) + (Number(params.children) || 0),
    rating: Number(params.rating) || 0,
    facilities: [],
    continents: [],
    countries: [],
  })

  useEffect(() => {
    setIsVisible(true)
    document.body.style.overflow = 'hidden'

    const paramsFromUrl = new URLSearchParams(window.location.search)

    const urlParams = {
      continents: paramsFromUrl.get('continents')
        ? paramsFromUrl.get('continents').split(',')
        : [],
      countries: paramsFromUrl.get('countries')
        ? paramsFromUrl.get('countries').split(',')
        : [],
      adults: paramsFromUrl.get('adults')
        ? Number.parseInt(paramsFromUrl.get('adults'))
        : 0,
      children: paramsFromUrl.get('children')
        ? Number.parseInt(paramsFromUrl.get('children'))
        : 0,
      guests: paramsFromUrl.get('guests')
        ? Number.parseInt(paramsFromUrl.get('guests'))
        : 0,
      rating: paramsFromUrl.get('rating')
        ? Number.parseInt(paramsFromUrl.get('rating'))
        : 0,
      price: {
        min: paramsFromUrl.get('priceMin')
          ? Number.parseInt(paramsFromUrl.get('priceMin'))
          : 0,
        max: paramsFromUrl.get('priceMax')
          ? Number.parseInt(paramsFromUrl.get('priceMax'))
          : 10000,
      },
      facilities: paramsFromUrl.get('facilities')
        ? paramsFromUrl.get('facilities').split(',')
        : [],
    }

    dispatch({ type: 'continents', payload: urlParams.continents })
    dispatch({ type: 'countries', payload: urlParams.countries })
    dispatch({ type: 'adults', payload: urlParams.adults })
    dispatch({ type: 'children', payload: urlParams.children })
    dispatch({
      type: 'guests',
      payload: urlParams.adults + urlParams.children,
    })
    dispatch({ type: 'rating', payload: urlParams.rating })
    dispatch({
      type: 'price',
      payload: [urlParams.price.min, urlParams.price.max],
    })
    dispatch({ type: 'facilities', payload: urlParams.facilities })
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    document.body.style.overflow = 'auto'
    setTimeout(onClose, 300)
  }

  const handleApplyFilters = () => {
    const updatedParams = {
      continents: state.continents.join(','),
      countries: state.countries.join(','),
      adults: state.adults,
      children: state.children,
      guests: state.guests,
      rating: state.rating,
      priceMin: state.price.min,
      priceMax: state.price.max,
      facilities: state.facilities.join(','),
    }

    onApplyFilters(updatedParams)
    handleClose()
  }

  return (
    <div className="fixed top-0 w-full z-40">
      <div
        className={`transform transition-transform duration-300 ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        } border-r border-t bg-background z-40 left-0 top-0 h-screen md:max-w-[50%] lg:max-w-[35%] 2xl:max-w-[30%] 3xl:max-w-[25%] w-full overflow-y-auto pb-5`}
      >
        <div className="mt-[5rem] mb-[3rem] md:my-4 lg:my-[2rem] pr-[12%] lg:pr-16 pl-[10%] md:p-[16%] 2xl:pl-[25%] flex flex-col gap-2">
          <div className="flex items-center justify-between pb-4 lg:pb-6">
            <h2 className="text-lg font-semibold">Filter</h2>
            <button type="button" onClick={handleClose}>
              <icons.closeIcon />
            </button>
          </div>
          <CheckList
            data={{ ...continentData, type: 'continents' }}
            dispatch={dispatch}
            state={state.continents}
          />
          <CheckList
            data={{ ...countryData, type: 'countries' }}
            dispatch={dispatch}
            state={state.countries}
          />
          <Guests dispatch={dispatch} state={state} />

          <CheckList
            data={{ ...facilitiesData, type: 'facilities' }}
            dispatch={dispatch}
            state={state.facilities}
          />
          <PriceRange state={state.price} dispatch={dispatch} />
          <VenueRating state={state.rating} dispatch={dispatch} />
          <Button onClick={handleApplyFilters}>Apply filters</Button>
        </div>
      </div>
    </div>
  )
}
