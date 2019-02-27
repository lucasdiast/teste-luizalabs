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
      <section className="SearchBox">
        <h3 className="SearchBox__title">Consultar</h3>
        <div className="SearchBox__wrapper">
          <label className="SearchBox__wrapper title">CEP</label>
          <input
            type="text"
            className="SearchBox__wrapper txtField"
            onChange={e => this.setState({ cep: e.target.value })}
          />
          <button
            className="SearchBox__wrapper btn"
            onClick={() => searchAddress(cep)}
          >
            Buscar
          </button>
        </div>
      </section>
    );
  }
}

export default SearchBox;
