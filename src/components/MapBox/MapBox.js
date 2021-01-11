import React from "react";
import Map from "./Map";

function MapBox(props) {
  const lat = props.results.reduce((t, r) => {
    let lat = r.latitude
    let parsedLat = parseFloat(lat)
    return t + parsedLat
  },0)/props.results.length;

    const lon = props.results.reduce((t, r) => {
      let lon = r.longitude
      let parsedLon = parseFloat(lon)
      return t + parsedLon
    },0)/props.results.length;

  return (
    <>
      <Map lat={lat} lon={lon} results={props.results} />
    </>
  );
}

export default MapBox;
