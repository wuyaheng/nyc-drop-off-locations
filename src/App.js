import React, { Component } from "react";
import MapBox from "./components/MapBox/MapBox";
import TextBox from "./components/TextBox/index";
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
        sel_zipCode: "10027"
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
    let zip = event.target.value.trim();
    let isZip = zip.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/);

    if (isZip) {
      this.setState(
        {
        sel_zipCode: event.target.value,
        },
        this.searchRestaurant
        );
    }
   
  };

  handleChange = (event) => {
    let zip = event.target.value.trim();
    let isZip = zip.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/);

    if (isZip) {
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
    }
  };


  render() {
    const {  textile,
      foodScrap,
      electronics,
      pharmaceutical,
      leaf } = this.state;
    return (
      <>
        <nav className="nav-wrapper">
          <span className="brand-logo center">
          NYC Drop-Off Locations
          </span>
        </nav>
        <div className="container-fluid mt-2">
          <div class="row m-0 p-0">
        <div class="col-md-3">
        <TextBox results={{ textile, foodScrap, electronics, pharmaceutical, leaf }} />
        </div>
      <div class="col-md-9">
          <div class="col s12">
            <div class="row m-0 p-0">
              <div class="input-field col s6 pb-0 mb-0"> 
                <i class="material-icons prefix">mode_edit</i> 
                <textarea id="icon_prefix2" class="materialize-textarea mb-0 pb-0" onChange={this.handleChange}></textarea>
                <label for="icon_prefix2">Enter Another Zip Code</label>
              </div>
            </div>
          </div>
          <div className="col-md-12">
              <div className="card">
                <MapBox results={{ textile, foodScrap, electronics, pharmaceutical, leaf }} /> 
              </div>
            </div>
        </div>
        </div>
        </div>
      </>
    );
  }
}

export default App;
