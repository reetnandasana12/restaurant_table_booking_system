
import React , {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
// import CarDetails from "./CarDetails";

import {Link} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { getAllHotels } from './redux/action/hotelActions';
function Booking(props) {
  const { hotelid } = useParams();
  
  const {hotels} = useSelector(state=>state.hotelsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getAllHotels())
  }, [])

  const hotel = hotels.find(hotel=>hotel._id===hotelid);

  return (
    <DefaultLayout>
      <br></br>
      <h1>Booking</h1>
      {/* <CarDetails hotel={hotel}/> */}
      <Link to={`/placeorder/${hotelid}`}>book table</Link>
     
    </DefaultLayout>
  );
}

export default Booking;
