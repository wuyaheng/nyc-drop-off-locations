import React from "react";
import Map from "./Map";

function MapBox(props) {

  let { textile, foodScrap, electronics, pharmaceutical, leaf } = props.results;

  const textile_lat = textile.reduce((t, r) => {
    let textile_lat = r.latitude
    let textile_parsedLat = parseFloat(textile_lat)
    return t + textile_parsedLat
  },0)/textile.length; 

    const textile_lon = textile.reduce((t, r) => {
      let textile_lon = r.longitude
      let textile_parsedLon = parseFloat(textile_lon)
      return t + textile_parsedLon
    },0)/textile.length;

    console.log(textile_lat)
    console.log(textile_lon) 

  return (
    <>
      {/* <Map lat={lat} lon={lon} results={props.results} /> */}
    </>
  );
}

export default MapBox;
