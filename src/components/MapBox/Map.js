import React from "react";
import L from "leaflet";

export default (props) => {
  React.useEffect(() => {
    const MAP_CONTAINER = document.getElementById("map-container");

    if (props.lat && props.lon && props.results) { 
      const MAP_ID = document.createElement("div");
      MAP_ID.setAttribute("id", "mapid");
      MAP_CONTAINER.appendChild(MAP_ID);

      // Initialize all of the LayerGroups we'll be using
      var layers = {
        Leaf: new L.LayerGroup(),
        Textile: new L.LayerGroup(),
        Electronics: new L.LayerGroup(), 
        FoodScrap: new L.LayerGroup(),
        Pharmaceutical: new L.LayerGroup()
      };


      const mymap = L.map("mapid", {
        layers: [
          layers.Leaf,
          layers.Textile,
          layers.Electronics,
          layers.FoodScrap,
          layers.Pharmaceutical
        ]
      }).setView([props.lat, props.lon], 15);

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

      // Create an overlays object to add to the layer control
      var overlays = {
        "Leaf": layers.Leaf, 
        "Textile": layers.Textile,
        "Electronics": layers.Electronics,
        "FoodScrap": layers.FoodScrap,
        "Pharmaceutical": layers.Pharmaceutical 
      };

      // Create a control for our layers, add our overlay layers to it
      L.control.layers(null, overlays, {collapsed:false}).addTo(mymap);
 

      var iconTextile = L.divIcon({
				className: 'custom-div-icon',
        html: "<div style='background-color:#4281a4;' class='marker-pin'></div><i class='fas fa-tshirt awesome'>", 
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

      var iconfoodScrap = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#b2967d;' class='marker-pin'></div><i class='fas fa-utensils awesome'>", 
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

      var iconElectronics = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#d80032;' class='marker-pin'></div><i class='fas fa-charging-station awesome'>", 
        iconSize: [30, 42], 
        iconAnchor: [15, 42]
    });

    var iconPharmaceutical = L.divIcon({
      className: 'custom-div-icon',
      html: "<div style='background-color:#f4acb7;' class='marker-pin'></div><i class='fas fa-capsules awesome'>", 
      iconSize: [30, 42], 
      iconAnchor: [15, 42]
  });

  var iconLeaf = L.divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color:#70a288;' class='marker-pin'></div><i class='fas fa-leaf awesome'>", 
    iconSize: [30, 42], 
    iconAnchor: [15, 42]
});

      // Create a legend to display information about our map
      var info = L.control({
        position: "bottomright"
      });

      // When the layer control is added, insert a div with the class of "legend"
      info.onAdd = function() {
        var div = L.DomUtil.create("div", "legend");
        div.innerHTML += "<p><b>Drop-Off Categories</b></p>"
        div.innerHTML += "<span class='dot leaf'></span>Leaf<br/>"; 
        div.innerHTML += "<span class='dot textile'></span>Textile<br/>"; 
        div.innerHTML += "<span class='dot electronics'></span>Electronics<br/>";
        div.innerHTML += "<span class='dot foodscrap'></span>Food Scrap<br/>";  
        div.innerHTML += "<span class='dot pharmaceutical'></span>Pharmaceutical<br/>"; 
        return div;
      };
      // Add the info legend to the map
      info.addTo(mymap);

      props.results.textile.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: iconTextile})
      .addTo(layers.Textile)
      .bindTooltip("<h6 class='p-0 m-0'><b>Textile Drop-Off Location</b></h6><p><b>Name:</b> " + pin.vendor_name + "</p><p><b>Items Accepted:</b> " + pin.items_accepted + "</p><p><b>Phone:</b> " + pin.public_phone + "</p><p><b>Email:</b> " + pin.public_email + "</p><p><b>Address:</b> " + pin.address + ", New York, NY" + pin.zipcode + "</p>"));

      props.results.foodScrap.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: iconfoodScrap})
      .addTo(layers.FoodScrap)
      .bindTooltip("<h6 class='p-0 m-0'><b>Food Scrap Drop-Off Location</b></h6><p><b>Name:</b> " + pin.food_scrap_drop_off_site + "</p><p><b>Website:</b> " + pin.website + "</p><p><b>Address:</b> " + pin.location + "</p>"));

      props.results.electronics.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: iconElectronics})
      .addTo(layers.Electronics)
      .bindTooltip("<h6 class='p-0 m-0'><b>Electronics Drop-Off Location</b></h6><p><b>Name:</b> " + pin.dropoff_sitename + "</p><p><b>Address:</b> " + pin.address +  ", New York, NY" + pin.zipcode + "</p>"));

      props.results.pharmaceutical.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: iconPharmaceutical})
      .addTo(layers.Pharmaceutical)
      .bindTooltip("<h6 class='p-0 m-0'><b>Pharmaceutical Drop-Off Location</b></h6><p><b>Name:</b> " + pin.drop_off_site_name + "</p><p><b>Address:</b> " + pin.address + "</p>")); 

      props.results.leaf.forEach((pin) => L.marker([pin.latitude, pin.longitude],{icon: iconLeaf})
      .addTo(layers.Leaf)
      .bindTooltip("<h6 class='p-0 m-0'><b>Leaf Drop-Off Location</b></h6><p><b>Name:</b> " + pin.site_name + "</p><p><b>Address:</b> " + pin.address + "</p>")); 
    }

    return () => (MAP_CONTAINER.innerHTML = ""); 
  }, [props.lat, props.lon, props.results]);

  return <div id="map-container"></div>; 
}