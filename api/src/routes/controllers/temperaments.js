const axios = require("axios");
const { fetchBreedsApi } = require("./breeds");
const { Temperament } = require("../../db");

//hacer una consula a la db antes asi esta mierda no hace todo el bardo mas de una vez

const loadDB = async function(temp) {
  try {
    temp && temp != null && await Temperament.create({name: temp})
  } catch (error) {
    console.log(error)   
  }
}

const fetchTemperaments = async function() {
  try {
    const allBreeds = await fetchBreedsApi("");

    let temperamentsRaw = await allBreeds.map((breed) => {
      let temperaments = breed.temperament;
      if (temperaments) {
        temperaments = temperaments.split(", ");
      }
      return temperaments;
    });
    let allTemperaments = new Set(temperamentsRaw.flat());
    allTemperaments = [...allTemperaments]

    return allTemperaments;

  } catch (error) {
    console.log(error);
  }
}
const initialLoadDB = async function(){
  try {
    let temperaments = await fetchTemperaments()
    await Promise.all(temperaments.map(loadDB))
    console.log("DB loaded")
    temperaments = await Temperament.findAll();
    return temperaments
  } 
 catch (error) {
 console.log(error)   
}
}

const getTemperaments = async function (req, res, next) {
  try {
    let allTemperaments = await Temperament.findAll();
    if(!allTemperaments.length){
      allTemperaments = await initialLoadDB()
    }  
    res.status(200).json(allTemperaments)

  } catch (error) {
    console.log(error);
  }
  

};

module.exports = {
  getTemperaments,
};
