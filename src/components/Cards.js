import React from "react";
import Button from "./Button";

const Cards = ({ name }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Cards;
