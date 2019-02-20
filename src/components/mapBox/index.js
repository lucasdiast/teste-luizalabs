import React from 'react';
import './index.css';

const MapBox = (props) => {
  const {cep, logradouro, bairro, localidade, uf} = props.data
  
  return (
    <div className="MapBox">
      <div>{logradouro}</div>
      <div>{bairro}</div>
      <div>{`${localidade} - ${uf}`}</div>
      <div>{cep}</div>
      <button onClick={props.handleMapBox}>X</button>
      <div> AQUI VAI O MAPAO </div>
    </div>
  )
}

export default MapBox;
