import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./index.css";

const Pin = ({ text }) => <div>{text}</div>;

class MapBox extends Component {
  state = {
    center: {
      lat: -23.516404,
      lng: -46.6242541
    },
    zoom: 16
  };

  componentWillReceiveProps(nextProps) {
    const { lat, lng } = nextProps.data;

    this.setState({ center: { lat, lng } });
  }

  render() {
    const { handleMapBox } = this.props;
    const { center, zoom } = this.state;
    const {
      cep,
      logradouro,
      localidade,
      uf,
      bairro,
      lat,
      lng
    } = this.props.data;

    return (
      <div className="MapBox">
        <div>{logradouro}</div>
        <div>{bairro}</div>
        <div>{`${localidade} - ${uf}`}</div>
        <div>{cep}</div>
        <button onClick={handleMapBox}>X</button>
        <div style={{ height: "75vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB4V_nUJoT7jByX-SdFiHyFOR0Jjm0C4ds"
            }}
            defaultZoom={zoom}
            center={center}
          >
            <Pin lat={lat} lng={lng} text="Aqui estou" />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default MapBox;
