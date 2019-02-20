import axios from 'axios';

const getAddress = cep => 
  axios.get(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => {
      return Promise.resolve(response)
    })
    .catch(error => {
      return Promise.reject(new Error(error.message))
    })

export default getAddress