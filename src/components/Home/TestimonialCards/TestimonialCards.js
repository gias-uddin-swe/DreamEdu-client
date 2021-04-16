import React from "react";
import "./TestimonialCards.css";

const TestimonialCards = ({ client }) => {
  return (
    <div className="col-md-4 review-container">
      <div className="costumer w-80">
        <div>
          <p>" {client.comments} "</p>
        </div>
        <div className="row d-flex justify-content-center align-items-center w-75 m-auto">
          <div className="col-md-6 mt-2 text-center">
            <img src={client.image} alt="" />
          </div>
          <div className="col-md-6 mt-2 text-center">
            <h5>{client.name}</h5>
          </div>
        </div>
        <p className="mt-2 text-center">
          <strong>{client.rating}/5</strong>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCards;
