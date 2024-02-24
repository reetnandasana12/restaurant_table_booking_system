// HotelDetails.js
import React from "react";
import HotelPhotos from "./HotelPhotos";
import HotelInformation from "./hotelinformation";
import "../../style/HotelDetails.css";

const HotelDetails = ({hotel}) => {
  const hotelInfo = {
    name: "Cozy Inn",
    location: "123 Main Street, Cityville",
    description: "A charming hotel offering cozy rooms with modern amenities.",
    photos: [
      "https://th.bing.com/th/id/OIP.Xc8U5_Q-sPm7RlKT_bFt6wHaE2?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.Xc8U5_Q-sPm7RlKT_bFt6wHaE2?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.Xc8U5_Q-sPm7RlKT_bFt6wHaE2?rs=1&pid=ImgDetMain",
    ],
  };

  return (
    <div>
      <div className="photo-container">
        
        <HotelPhotos photos={hotelInfo.photos} />
      </div>
      <div className="hotel-details-container">
        <HotelInformation {...hotel} />
      </div>
    </div>
  );
};

export default HotelDetails;
