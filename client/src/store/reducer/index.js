import {
  FILTER_BY_TEMPERAMENT,
  FILTER_ORIGINAL,
  GET_BREEDS,
  GET_BREED_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER_BY,
  POST_BREED,
  RANDOM_ID,
} from "../constants";
import isOriginal from "./utils";

const initialState = {
  breeds: [],
  allBreeds: [],
  temperaments: [],
  order: [],
  filter: [],
  randomId: 1,
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
      const orderedTempers = action.payload.sort((a, b) => {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      });
      return {
        ...state,
        temperaments: orderedTempers,
      };
    case GET_BREED_BY_NAME:
      return {
        ...state,
        breeds: action.payload,
      };
    case FILTER_ORIGINAL:
      const allBreedsFilter = state.allBreeds;
      const filteredBreeds =
        action.payload === "all"
          ? allBreedsFilter
          : allBreedsFilter.filter(
              (dog) => isOriginal(dog.id) === action.payload
            );
      return {
        ...state,
        breeds: filteredBreeds,
      };
    case FILTER_BY_TEMPERAMENT:
      const breedList = state.allBreeds;
      const breedsByTemper =
        action.payload === "all"
          ? breedList
          : breedList.filter((dog) => dog.temperament.includes(action.payload));
      return {
        ...state,
        breeds: breedsByTemper,
      };
    case ORDER_BY:
      return {
        ...state,
        order: action.payload,
      };
    case POST_BREED:
      return {
        ...state,
      };
    case RANDOM_ID:
      const allDogs = state.allBreeds;
      const randomPosition = Math.floor(Math.random() * allDogs.length);
      console.log(randomPosition, allDogs)
      const newId = allDogs[randomPosition].id;
      console.log(newId)
      return {
        ...state,
        randomId: newId,
      };
    default:
      return state;
  }
}
