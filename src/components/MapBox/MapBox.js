import React from "react";
import Map from "./Map";

function MapBox(props) {

  let { textile, foodScrap, electronics, pharmaceutical, leaf } = props.results;

  const textileLat = textile.reduce((t, r) => {
    let textile_lat = r.latitude
    let textile_parsedLat = parseFloat(textile_lat)
    return t + textile_parsedLat
  },0)/textile.length; 

  const textileLon = textile.reduce((t, r) => {
    let textile_lon = r.longitude
    let textile_parsedLon = parseFloat(textile_lon)
    return t + textile_parsedLon
  },0)/textile.length;

  const foodScrapLat = textile.reduce((t, r) => {
    let foodScrap_lat = r.latitude
    let foodScrap_parsedLat = parseFloat(foodScrap_lat)
    return t + foodScrap_parsedLat
  },0)/foodScrap.length; 
  
  const foodScrapLon = foodScrap.reduce((t, r) => {
    let foodScrap_lon = r.longitude
    let foodScrap_parsedLon = parseFloat(foodScrap_lon)
    return t + foodScrap_parsedLon
  },0)/foodScrap.length;

  const electronicsLat = electronics.reduce((t, r) => {
    let electronics_lat = r.latitude
    let electronics_parsedLat = parseFloat(electronics_lat)
    return t + electronics_parsedLat
  },0)/electronics.length; 
    
  const electronicsLon = electronics.reduce((t, r) => {
    let electronics_lon = r.longitude
    let electronics_parsedLon = parseFloat(electronics_lon)
    return t + electronics_parsedLon
  },0)/electronics.length;

  const pharmaceuticalLat = pharmaceutical.reduce((t, r) => {
    let pharmaceutical_lat = r.latitude
    let pharmaceutical_parsedLat = parseFloat(pharmaceutical_lat)
    return t + pharmaceutical_parsedLat
  },0)/pharmaceutical.length; 
      
  const pharmaceuticalLon = pharmaceutical.reduce((t, r) => {
    let pharmaceutical_lon = r.longitude
    let pharmaceutical_parsedLon = parseFloat(pharmaceutical_lon)
    return t + pharmaceutical_parsedLon
  },0)/pharmaceutical.length;

  const leafLat = leaf.reduce((t, r) => {
    let leaf_lat = r.latitude
    let leaf_parsedLat = parseFloat(leaf_lat)
    return t + leaf_parsedLat
  },0)/leaf.length; 
        
  const leafLon = leaf.reduce((t, r) => {
    let leaf_lon = r.longitude
    let leaf_parsedLon = parseFloat(leaf_lon)
    return t + leaf_parsedLon
  },0)/leaf.length;  


  var lat, lon;

  if(isFinite(textileLat) && isFinite(textileLon)) {
    lat = textileLat;
    lon = textileLon;
  } else if (isFinite(foodScrapLat) && isFinite(foodScrapLon)) {
    lat = foodScrapLat;
    lon = foodScrapLon; 
  } else if (isFinite(electronicsLat) && isFinite(electronicsLon)) {
    lat = electronicsLat;
    lon = electronicsLon; 
  } else if (isFinite(pharmaceuticalLat) && isFinite(pharmaceuticalLon)) {
    lat = pharmaceuticalLat;
    lon = pharmaceuticalLon; 
  } else {
    lat = leafLat;
    lon = leafLon; 
  }
  
  return (
    <>
      <Map lat={lat} lon={lon} results={props.results} />
    </>
  );
}

export default MapBox;
