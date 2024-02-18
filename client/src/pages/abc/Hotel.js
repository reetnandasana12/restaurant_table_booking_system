import React from 'react'
import HotelPhotos from './HotelPhotos'
import HotelInformation from './hotelinformation'
import HotelDetails from './hoteldetails'

export default function hotel() {
  return (
    <div>
      <HotelPhotos/>
      <HotelInformation/>
      <HotelDetails/>
    </div>
  )
}
