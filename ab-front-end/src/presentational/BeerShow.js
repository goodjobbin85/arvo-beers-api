import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// PRESENTATIONAL;
const BeerShow = props => {
  if (props.state.beers.length > 0) {
    let beer = props.state.beers.find(
      beer => beer.id === parseInt(props.id.match.params.id)
    );
    let imgSrc = beer.avatar_url
      ? beer.avatar_url[0]
      : "https://yw553ftvhw1iqegz29fycoyw-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/beer-16-9.jpg";
    let starsArr = [];
    for (let i = 0; i < beer.rating; i++) {
      starsArr.push(
        <FontAwesomeIcon icon={faStar} style={{ color: "white" }} />
      );
    }
    return (
      <div key={beer.id} className="text-center">
        <h2>{beer.name}</h2>
        <p>by {beer.brewery_name}</p>
        <p>{beer.country}</p>
        <img
          src={imgSrc}
          alt="beer"
          className="shadow-lg border rounded"
          style={{ maxWidth: "20rem" }}
        />
        <br />
        <span>{starsArr}</span>
        <p>
          {beer.beer_type} - {beer.abv}%
        </p>
        <p>Notes: {beer.notes}</p>
        <button
          id={beer.id}
          className="m-1 border border-dark btn btn-light"
          onClick={() => props.state.deleteBeer(beer.id, props.history)}
        >
          Delete
        </button>
        <button
          className="m-1 border border-dark btn btn-light"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <h4>No beer found</h4>
        <button
          className="m-1 border border-dark btn btn-light"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    );
  }
};

// Use to connect history
export default connect()(withRouter(BeerShow));
