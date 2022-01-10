import {
  FILTER_BY_TEMPERAMENT,
  FILTER_ORIGINAL,
  GET_BREEDS,
  GET_TEMPERAMENTS,
} from "../constants";
import uuidValidate from "./utils";

const initialState = {
  breeds: [],
  allBreeds: [],
  temperaments: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BREEDS:
      return {
        ...state,
        breeds: action.payload,
        allBreeds: action.payload,

      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case FILTER_ORIGINAL:
      const allBreeds = state.allBreeds;
      const filteredBreeds = action.payload === 'all' ? allBreeds : allBreeds.filter(dog => uuidValidate(dog.id) === action.payload )
      return {
        ...state,
        breeds: filteredBreeds
      };
      case FILTER_BY_TEMPERAMENT:
      const breedList = state.allBreeds;
      const breedsByTemper = action.payload === 'all' ? breedList : breedList.filter(dog =>  dog.temperament.includes(action.payload))
      return {
        ...state,
        breeds: breedsByTemper
      };
    default:
      return state; 
  }
}
