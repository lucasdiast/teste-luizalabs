import axios from "axios";

export const getAddress = cep =>
  axios
    .get(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(error => {
      return Promise.reject(new Error(error.message));
    });

export const getGeolocation = address =>
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address},+CA&key=AIzaSyB4V_nUJoT7jByX-SdFiHyFOR0Jjm0C4ds`
    )
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(error => {
      return Promise.reject(new Error(error.message));
    });
