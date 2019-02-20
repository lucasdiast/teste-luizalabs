import React, { Component } from 'react';
import SearchBox from './components/searchBox'
import MapBox from './components/mapBox'
import getAddress from './services'
import './App.css';

class App extends Component {
  state = { 
    data: {},
    mapActive: false
  };

  handleMapBox = () => {
    this.setState({data: {}})
  }

  searchAddress = cep => {
    getAddress(cep)
      .then(response => this.setState({data: response.data}))
      .catch(e => new Error(e))
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <h1>Consulta de endereço</h1>
        <SearchBox searchAddress={this.searchAddress} />
        <MapBox handleMapBox={this.handleMapBox} data={data} />
      </div>
    );
  }
}

export default App;
