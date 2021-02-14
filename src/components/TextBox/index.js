import React from "react";

function TextBox(props) {
    let { textile, foodScrap, electronics, pharmaceutical, leaf } = props.results;
    return (
        <div>
        <div class="card-panel text-center">
        Textile Drop-Off Locations
        <p className="number">
        {textile.length}
        </p>
      </div>
      <div class="card-panel text-center">
      Food Scrap Drop-Off Locations
        <p className="number">
        {foodScrap.length}
        </p>
      </div>
      <div class="card-panel text-center">
      Electronics Drop-Off Locations
        <p className="number">
        {electronics.length}
        </p>
      </div>
      <div class="card-panel text-center">
      Pharmaceutical Drop-Off Locations
        <p className="number">
        {pharmaceutical.length}
        </p>
      </div>
      <div class="card-panel text-center">
      Leaf Drop-Off Locations
        <p className="number">
        {leaf.length}
        </p>
      </div>
        </div>
    )
}

export default TextBox; 