import axios from "axios";

export const getAddress = cep =>
  axios.get(`https://viacep.com.br/ws/${cep}/json`);

export const getGeolocation = address =>
  axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address},+CA&key=AIzaSyB4V_nUJoT7jByX-SdFiHyFOR0Jjm0C4ds`
  );
