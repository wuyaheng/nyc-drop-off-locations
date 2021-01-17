import React from "react";
import Map from "./Map";

function MapBox(props) {

  let { textile, foodScrap, electronics, pharmaceutical, leaf } = props.results;

  let allLayersArray = [...textile, ...foodScrap, ...electronics, ...pharmaceutical, ...leaf]
  
  let latLon = allLayersArray.reduce(reduceLatLon, {lat:0, lon:0})
  latLon.lat = latLon.lat / allLayersArray.length
  latLon.lon = latLon.lon / allLayersArray.length
  
  let lat, lon;
  
  if(isFinite(latLon.lat) && isFinite(latLon.lon)) {
    lat = latLon.lat;
    lon = latLon.lon;
  } else {
    lat = 40.7128; //NYC lat
    lon = -74.0060; //NYC lon 
  }
  
  function reduceLatLon(obj,r){
    obj.lat += parseFloat(r.latitude)
    obj.lon += parseFloat(r.longitude)
    return obj;
  }

  
  return (
    <>
      <Map lat={lat} lon={lon} results={props.results} />
    </>
  );
}

export default MapBox;
