const { Breed, Temperament } = require("../../db");
const axios = require("axios");
const { API_KEY } = process.env;


const getBreeds = async function (req, res, next) {
  const { name } = req.query;
  try {
    const breeds = await fetchBreeds(name);
    console.log('estoy aca', breeds)
    res.send(breeds);
  } catch (error) {
    next(error)
  }

};

const fetchBreeds = function (name) {
  try{
  const promiseBreedsApi = axios.get(
    `https://api.thedogapi.com/v1/breeds${hasQueryApi(name)}api_key=${API_KEY}`
  );
  const promiseBreedsDB = Breed.findAll(hasQueryDB());
  let wantedBreeds = [];
  Promise.all([promiseBreedsApi, promiseBreedsDB])
  .then((results)=>{
    const [breedsApi, breedsDB] = results;
    wantedBreeds = [
      ...formatApi(breedsApi.data),
      ...formatApi(breedsDB)
    ]
    if(!wantedBreeds.length){
      return ("There aren't any breeds with that name")
    }
  })

  return wantedBreeds

} catch(e){
  console.log(e)
}

};

const formatApi = function(breeds){
 let formated = breeds.map(breed => 
  {
    let newFormat = {
      id: breed.id,
      name: breed.name,
      weight: breed.weight.metric,
      temperament: breed.temperament, 
      image: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
    }
    return newFormat
  })
 return formated
}
const formatDB = function(breeds){
return breeds
}

const hasQueryDB = function (name) {
  return name ? { where: { name: { [Op.iLike]: "%" + name + "%" } } } : {};
};

const hasQueryApi = function (name) {
  let completeUrl = "?";
  if (name) {
    completeUrl = "/search?q=" + name + "&";
  }
  return completeUrl;
};

const getBreedById = function (req, res, next) {
  const { id } = req.params;
  res.send(id);
};

const createBreed = function (req, res, next) {
  res.send("ya cree la nueva raza");
};

module.exports = {
  getBreeds,
  getBreedById,
  createBreed,
};
