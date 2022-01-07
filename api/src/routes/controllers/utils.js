const axios = require("axios");
const { API_KEY } = process.env;
const { Op } = require("sequelize");
const { Breed, Temperament } = require("../../db");

const fetchBreedsApi = async function (name) {
    const allBreeds = await axios.get(
      `https://api.thedogapi.com/v1/breeds${hasQueryApi(name)}api_key=${API_KEY}`
    );
    return allBreeds.data;
  };
  
  const fetchBreedsDB = async function (name) {
    allBreedsDB = await Breed.findAll(hasQueryDB(name));
  
    return allBreedsDB;
  };

const hasQueryDB = function (name) {
    return name
      ? {
          where: { name: { [Op.iLike]: "%" + name + "%" } },
          include: [
            {
              model: Temperament,
            },
          ],
          attributes: {
            exclude: ["breed_temperament"],
          },
        }
      : {};
  };
  
  const hasQueryApi = function (name) {
    let completeUrl = "?";
    if (name) {
      completeUrl = "/search?q=" + name + "&";
    }
    return completeUrl;
  };
  

  function weightToJson(weightString) {
    let [min, max] = weightString.split(" - ");
    let weightOk = {
      min: Number(min),
      max: Number(max),
    };
  
    return weightOk;
  }
  
  
  
  function formatTemperamet(temper) {
    let formatedTemper = [];
  
    if (typeof temper === "string") {
      formatedTemper = temper.split(", ");
    }
    if (typeof temper === "object") {
      formatedTemper = temper.map((temp) => temp.name);
    }
  
    return formatedTemper;
  }

  
  const formatApiDetail = function (breed) {
      let detailApi = {
        id: breed.id,
        name: breed.name,
        weight: weightToJson(breed.weight.metric),
        temperament: formatTemperamet(breed.temperament),
        image: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`,
        height: breed.height.metric,
        life_span: breed.life_span,
      };
  
    return detailApi;
  };
  
  const formatDBDetail = function (breed) {
      let detailDB = {
        id: breed.id,
        name: breed.name,
        weight: breed.weight,
        temperament: formatTemperamet(breed.temperaments),
        image: breed.img,
        life_span: breed.life_span,
        height: breed.height,
      };
    return detailDB;
  };
  

module.exports = {
    fetchBreedsApi,
    fetchBreedsDB,
    formatApiDetail,
    formatDBDetail,
  };
  