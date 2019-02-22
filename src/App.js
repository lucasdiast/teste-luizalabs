import React, { Component } from "react";
import { getAddress, getGeolocation } from "./services";
import { ToastContainer, toast } from "react-toastify";
import SearchBox from "./components/searchBox";
import MapBox from "./components/mapBox";
import "./App.css";

class App extends Component {
  state = {
    data: {},
    mapActive: false
  };

  handleMapBox = () => {
    this.setState({ data: {} });
  };

  searchAddress = async cep => {
    const address = await getAddress(cep)
      .then(response => response.data)
      .catch(e => this.notify(e));

    let completeAddress = `${address.logradouro} ${address.bairro} ${
      address.localidade
    }`;

    const geolocation = await getGeolocation(completeAddress)
      .then(response => response.data.results[0])
      .catch(e => this.notify(e));

    return this.setState({
      data: { ...address, ...geolocation.geometry.location }
    });
  };

  notify = error => toast(error.message);

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <h1>Consulta de endereço</h1>
        <SearchBox searchAddress={this.searchAddress} />
        <MapBox handleMapBox={this.handleMapBox} data={data} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
