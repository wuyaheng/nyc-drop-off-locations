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

  const foodScrap_lat = textile.reduce((t, r) => {
    let foodScrap_lat = r.latitude
    let foodScrap_parsedLat = parseFloat(foodScrap_lat)
    return t + foodScrap_parsedLat
  },0)/foodScrap.length; 
  
  const foodScrap_lon = foodScrap.reduce((t, r) => {
    let foodScrap_lon = r.longitude
    let foodScrap_parsedLon = parseFloat(foodScrap_lon)
    return t + foodScrap_parsedLon
  },0)/foodScrap.length;

  const electronics_lat = electronics.reduce((t, r) => {
    let electronics_lat = r.latitude
    let electronics_parsedLat = parseFloat(electronics_lat)
    return t + electronics_parsedLat
  },0)/electronics.length; 
    
  const electronics_lon = electronics.reduce((t, r) => {
    let electronics_lon = r.longitude
    let electronics_parsedLon = parseFloat(electronics_lon)
    return t + electronics_parsedLon
  },0)/electronics.length;

  const pharmaceutical_lat = pharmaceutical.reduce((t, r) => {
    let pharmaceutical_lat = r.latitude
    let pharmaceutical_parsedLat = parseFloat(pharmaceutical_lat)
    return t + pharmaceutical_parsedLat
  },0)/pharmaceutical.length; 
      
  const pharmaceutical_lon = pharmaceutical.reduce((t, r) => {
    let pharmaceutical_lon = r.longitude
    let pharmaceutical_parsedLon = parseFloat(pharmaceutical_lon)
    return t + pharmaceutical_parsedLon
  },0)/pharmaceutical.length;

  const leaf_lat = leaf.reduce((t, r) => {
    let leaf_lat = r.latitude
    let leaf_parsedLat = parseFloat(leaf_lat)
    return t + leaf_parsedLat
  },0)/leaf.length; 
        
  const leaf_lon = leaf.reduce((t, r) => {
    let leaf_lon = r.longitude
    let leaf_parsedLon = parseFloat(leaf_lon)
    return t + leaf_parsedLon
  },0)/leaf.length;  

  if(isFinite(textile_lat) && isFinite(textile_lon)) {
    var lat = textile_lat;
    var lon = textile_lon;
  } else if (isFinite(foodScrap_lat) && isFinite(foodScrap_lon)) {
    var lat = foodScrap_lat;
    var lon = foodScrap_lon; 
  } else if (isFinite(electronics_lat) && isFinite(electronics_lon)) {
    var lat = electronics_lat;
    var lon = electronics_lon; 
  } else if (isFinite(pharmaceutical_lat) && isFinite(pharmaceutical_lon)) {
    var lat = pharmaceutical_lat;
    var lon = pharmaceutical_lon; 
  } else {
    var lat = leaf_lat;
    var lon = leaf_lon; 
  }
  
  return (
    <>
      <Map lat={lat} lon={lon} results={props.results} />
    </>
  );
}

export default MapBox;
