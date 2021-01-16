import React from "react";
import L from "leaflet";

export default (props) => {
  React.useEffect(() => {
    const MAP_CONTAINER = document.getElementById("map-container");

    if (props.lat && props.lon && props.results) { 
      const MAP_ID = document.createElement("div");
      MAP_ID.setAttribute("id", "mapid");
      MAP_CONTAINER.appendChild(MAP_ID);

      const mymap = L.map("mapid").setView([props.lat, props.lon], 15);

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: process.env.REACT_APP_MAP_API_KEY,
        }
      ).addTo(mymap);


      var iconTextile = L.divIcon({
				className: 'custom-div-icon',
        html: "<div style='background-color:#4281a4;' class='marker-pin'></div><i class='fa fa-tshirt awesome'>",
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

      var iconfoodScrap = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#b2967d;' class='marker-pin'></div><i class='fa fa-utensils awesome'>", 
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

      var iconElectronics = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#d80032;' class='marker-pin'></div><i class='fa fa-charging-station awesome'>", 
        iconSize: [30, 42], 
        iconAnchor: [15, 42]
    });

    var iconPharmaceutical = L.divIcon({
      className: 'custom-div-icon',
      html: "<div style='background-color:#ff7900;' class='marker-pin'></div><i class='fa fa-capsules awesome'>", 
      iconSize: [30, 42], 
      iconAnchor: [15, 42]
  });

  var iconLeaf = L.divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color:#70a288;' class='marker-pin'></div><i class='fa fa-leaf awesome'>", 
    iconSize: [30, 42], 
    iconAnchor: [15, 42]
});


      props.results.textile.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: iconTextile}).addTo(mymap).bindTooltip("<h6>Textile Drop-Off Location</h6><p><b>Name:</b> " + pin.vendor_name + "</p><p><b>Items Accepted:</b> " + pin.items_accepted + "</p><p><b>Phone:</b> " + pin.public_phone + "</p><p><b>Email:</b> " + pin.public_email + "</p><p><b>Address:</b> " + pin.address + ", New York, NY" + pin.zipcode + "</p>"));
      props.results.foodScrap.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: iconfoodScrap}).addTo(mymap).bindTooltip("<h6>Food Scrap Drop-Off Location</h6><p><b>Name:</b> " + pin.food_scrap_drop_off_site + "</p><p><b>Website:</b> " + pin.website + "</p><p><b>Address:</b> " + pin.location + "</p>"));
      props.results.electronics.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: iconElectronics}).addTo(mymap).bindTooltip("<h6>Electronics Drop-Off Location</h6><p><b>Name:</b> " + pin.dropoff_sitename + "</p><p><b>Address:</b> " + pin.address +  ", New York, NY" + pin.zipcode + "</p>"));
      props.results.pharmaceutical.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: iconPharmaceutical}).addTo(mymap).bindTooltip("<h6>Pharmaceutical Drop-Off Location</h6><p><b>Name:</b> " + pin.drop_off_site_name + "</p><p><b>Address:</b> " + pin.address + "</p>")); 
      props.results.leaf.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: iconLeaf}).addTo(mymap).bindTooltip("<h6>Leaf Drop-Off Location</h6><p><b>Name:</b> " + pin.site_name + "</p><p><b>Address:</b> " + pin.address + "</p>")); 
    }

    return () => (MAP_CONTAINER.innerHTML = ""); 
  }, [props.lat, props.lon, props.results]);

  return <div id="map-container"></div>; 
}