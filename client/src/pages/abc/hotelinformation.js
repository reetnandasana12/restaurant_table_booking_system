// HotelInformation.js
import React from "react";



const HotelInformation = ({ name, location, description }) => {
  return (
    <div className="hotel-info">
      <h2>{name}</h2>
      <div className="info-item">
        <strong>Location:</strong> {location}
      </div>
      <div className="info-item">
        <strong>Description:</strong> {description}
      </div>
    </div>
  );
};

export default HotelInformation;
