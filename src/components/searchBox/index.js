import React, { Component } from "react";
import "./index.css";

class SearchBox extends Component {
  state = {
    cep: {}
  };

  render() {
    const { cep } = this.state;
    const { searchAddress } = this.props;

    return (
      <div className="SearchBox">
        <div className="SearchBox__wrapper">
          <label className="SearchBox__title">CEP</label>
          <input
            type="text"
            onChange={e => this.setState({ cep: e.target.value })}
          />
          <button onClick={() => searchAddress(cep)}>Buscar</button>
        </div>
      </div>
    );
  }
}

export default SearchBox;
