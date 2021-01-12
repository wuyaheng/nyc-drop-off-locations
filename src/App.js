import React, { Component } from "react";
import MapBox from "./components/MapBox/MapBox";
import axios from "axios"; 
import "./App.css";

class App extends Component {
  state = {
    sel_zipCode: "",
    textile: [],
    foodScrap: [],
    electronics: [],
    pharmaceutical: [],
    leaf: []
  };

  componentDidMount() {
    this.setState(
      {
        sel_zipCode: "10010"
      },
      () => {
        this.searchTextile()
        this.searchFoodScrap()
        this.searchElectronics()
        this.searchPharmaceutical()
        this.searchLeaf()
      }
    );
  }

  searchTextile = async () => {
    const res = await axios.get(
      `https://data.cityofnewyork.us/resource/qnjm-wvu5.json`, 
      {
        params: {
          zipcode: this.state.sel_zipCode
        },
      }
    );
    let onlyValidTextile = res.data.filter(item => {
      let { latitude, longitude } = item;
      let lat = parseFloat(latitude);
      let lon = parseFloat(longitude);
      if (this.isFloat(lat) && this.isFloat(lon)) {
        return true
      }
      return false;
    })
    this.setState({
      textile: onlyValidTextile
    });
  };


  searchFoodScrap = async () => {
    const res = await axios.get(
      `https://data.cityofnewyork.us/resource/if26-z6xq.json`, 
      {
        params: {
          zip_code: this.state.sel_zipCode
        },
      }
    );
    let onlyValidFoodScrap = res.data.filter(item => {
      let { latitude, longitude } = item;
      let lat = parseFloat(latitude);
      let lon = parseFloat(longitude);
      if (this.isFloat(lat) && this.isFloat(lon)) {
        return true
      }
      return false;
    })
    this.setState({
      foodScrap: onlyValidFoodScrap
    });
  };


  searchElectronics = async () => {
    const res = await axios.get(
      `https://data.cityofnewyork.us/resource/wshr-5vic.json`, 
      {
        params: {
          zipcode: this.state.sel_zipCode
        },
      }
    );
    let onlyValidElectronics = res.data.filter(item => {
      let { latitude, longitude } = item;
      let lat = parseFloat(latitude);
      let lon = parseFloat(longitude);
      if (this.isFloat(lat) && this.isFloat(lon)) {
        return true
      }
      return false;
    })
    this.setState({
      electronics: onlyValidElectronics
    });
  };

  searchPharmaceutical = async () => {
    const res = await axios.get(
      `https://data.cityofnewyork.us/resource/edk2-vkjh.json`, 
      {
        params: {
          zipcode: this.state.sel_zipCode
        },
      }
    );
    let onlyValidPharmaceutical = res.data.filter(item => {
      let { latitude, longitude } = item;
      let lat = parseFloat(latitude);
      let lon = parseFloat(longitude);
      if (this.isFloat(lat) && this.isFloat(lon)) {
        return true
      }
      return false;
    })
    this.setState({
      pharmaceutical: onlyValidPharmaceutical
    });
  };

  searchLeaf = async () => {
    const res = await axios.get(
      `https://data.cityofnewyork.us/resource/8i9k-4gi5.json`, 
      {
        params: {
          zipcode: this.state.sel_zipCode
        },
      }
    );
    let onlyValidLeaf = res.data.filter(item => {
      let { latitude, longitude } = item;
      let lat = parseFloat(latitude);
      let lon = parseFloat(longitude);
      if (this.isFloat(lat) && this.isFloat(lon)) {
        return true
      }
      return false;
    })
    this.setState({
      leaf: onlyValidLeaf
    });
  };

  isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
  }


  handleChange = (event) => {
    this.setState(
      {
      sel_zipCode: event.target.value,
      },
      () => {
        this.searchTextile()
        this.searchFoodScrap()
        this.searchElectronics()
        this.searchPharmaceutical()
        this.searchLeaf()
      }
      );
  };


  render() {
    const {  textile,
      foodScrap,
      electronics,
      pharmaceutical,
      leaf } = this.state;
    return (
      <>
        <nav className="navbar navbar-light bg-dark">
          <span className="navbar-brand mb-0 text-white">
          <h5>NYC Drop-Off Locations</h5>
          </span>
        </nav>
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-md-12">
            <label htmlFor="form-control"><h5 className="pb-0 mb-0">Enter Another Zip Code Below</h5></label>
            <div className="input-group mb-2">
              <input type="text" className="form-control" value={this.state.sel_zipCode} onChange={this.handleChange} 
                    placeholder="Enter Another Zip Code" aria-label="Enter Another Zip Code" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Go!</button>
              </div>
            </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-12">
              <div className="card">
                <MapBox results={{ textile, foodScrap, electronics, pharmaceutical, leaf }} /> 
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
