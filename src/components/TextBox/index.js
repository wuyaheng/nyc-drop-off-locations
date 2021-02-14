import React from "react";

function TextBox(props) {
    let { textile, foodScrap, electronics, pharmaceutical, leaf } = props.results;
    return (
        <div>
        <div className="card-panel text-center">
        Available Textile Drop-Off Locations
        <p className="number">
        {textile.length}
        </p>
      </div>
      <div className="card-panel text-center">
      Available Food Scrap Drop-Off Locations
        <p className="number">
        {foodScrap.length}
        </p>
      </div>
      <div className="card-panel text-center">
      Available Electronics Drop-Off Locations
        <p className="number">
        {electronics.length}
        </p>
      </div>
      <div className="card-panel text-center">
      Available Pharmaceutical Drop-Off Locations
        <p className="number">
        {pharmaceutical.length}
        </p>
      </div>
      <div className="card-panel text-center">
      Available Leaf Drop-Off Locations
        <p className="number">
        {leaf.length}
        </p>
      </div>
        </div>
    )
}

export default TextBox; 