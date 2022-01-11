import {
  BREEDS_URL,
  FILTER_BY_TEMPERAMENT,
  FILTER_ORIGINAL,
  GET_BREEDS,
  GET_BREED_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER_BY,
  TEMPER_URL,
} from "../constants";
import axios from "axios";

export function getBreeds() {
  return function (dispatch) {
    axios
      .get(BREEDS_URL)
      .then((breeds) => {
        dispatch({
          type: GET_BREEDS,
          payload: breeds.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getTemperaments(payload) {
  return function (dispatch) {
    axios
      .get(TEMPER_URL)
      .then((temper) => {
        dispatch({
          type: GET_TEMPERAMENTS,
          payload: temper.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getBreedByName(name){
  return function(dispatch){
    axios.get(`${BREEDS_URL}?name=${name}`)
    .then((breeds)=> {
      dispatch({
        type: GET_BREED_BY_NAME,
        payload: breeds.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export function postBreeds(payload){
  return  async function(dispatch){
    const data = await axios.post(BREEDS_URL, payload)
    return data;
  }
}

export function filterByOriginal(payload) {
  return {
    type: FILTER_ORIGINAL,
    payload,
  };
}

export function filterByTemper(payload) {
  return {
    type: FILTER_BY_TEMPERAMENT,
    payload,
  };
}

export function orderBy(payload) {
  return {
    type: ORDER_BY,
    payload,
  };
}