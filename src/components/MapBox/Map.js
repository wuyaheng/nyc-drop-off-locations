import React from "react";
import L from "leaflet";

export default (props) => {
  React.useEffect(() => {
    const MAP_CONTAINER = document.getElementById("map-container");

    if (props.lat && props.lon && props.results) { 
      const MAP_ID = document.createElement("div");
      MAP_ID.setAttribute("id", "mapid");
      MAP_CONTAINER.appendChild(MAP_ID);

      const mymap = L.map("mapid").setView([props.lat, props.lon], 14);

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v8",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: process.env.REACT_APP_MAP_API_KEY,
        }
      ).addTo(mymap);

      var blueIcon = new L.Icon({ 
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      var redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      var goldIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      var orangeIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41] 
      });

      props.results.textile.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: blueIcon}).addTo(mymap).bindTooltip("<h6>Textile Drop-Off Location</h6><p><b>Name:</b> " + pin.vendor_name + "</p><p><b>Items Accepted:</b> " + pin.items_accepted + "</p><p><b>Phone:</b> " + pin.public_phone + "</p><p><b>Email:</b> " + pin.public_email + "</p><p><b>Address:</b> " + pin.address + ", New York, NY" + pin.zipcode + "</p>"));
      props.results.foodScrap.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: redIcon}).addTo(mymap).bindTooltip("<h6>Food Scrap Drop-Off Location</h6><p><b>Name:</b> " + pin.food_scrap_drop_off_site + "</p><p><b>Website:</b> " + pin.website + "</p><p><b>Address:</b> " + pin.location + "</p>"));
      props.results.electronics.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: goldIcon}).addTo(mymap).bindTooltip("<h6>Electronics Drop-Off Location</h6><p><b>Name:</b> " + pin.dropoff_sitename + "</p><p><b>Address:</b> " + pin.address +  ", New York, NY" + pin.zipcode + "</p>"));
      props.results.pharmaceutical.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: orangeIcon}).addTo(mymap).bindTooltip("<h6>Pharmaceutical Drop-Off Location</h6><p>" + pin.drop_off_site_name + "</p><p><b>Address:</b> " + pin.address + "</p>")); 
      props.results.leaf.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: greenIcon}).addTo(mymap).bindTooltip("<h6>Leaf Drop-Off Location</h6><p><b>Name:</b> " + pin.site_name + "</p><p><b>Address:</b> " + pin.address + "</p>")); 
    }

    return () => (MAP_CONTAINER.innerHTML = ""); 
  }, [props.lat, props.lon, props.pins]);

  return <div id="map-container"></div>; 
}