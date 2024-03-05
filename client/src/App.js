import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AddHotel from "./pages/AddHotel";
import "./App.css";
import Service from "./components/ServicePage";
import EditHotel from "./pages/EditHotel";
import AdminHome from "./pages/AdminHotel";
import SignInScreen from "./pages/SignInScreen";
import Booking from "./pages/Booking";
// import FoodDetailScreen from "./pages/FoodDetailScreen";
import SignUpScreen from "./pages/SignUpScreen";
import HomeScreen from "./pages/HomeScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import OrderSuccessfulScreen from "./pages/OrderSuccessfulScreen";
import HotelDetails from "./pages/abc/HotelDetails";
import SelectUser from "./pages/SelectUser";
import AdminDashBoard from "./pages/AdminDashBoard";
import BookingForm from "./pages/BookingForm";
import SortableTable from "./pages/Sortabletable";
import Navbar from "./pages/Navbar/Navbar";
import BookingHistory from "./pages/BookingHistory";
import CheckPage from "./components/CheckPage";

function App() {
  const user1 = localStorage.getItem("userid");
  const [user,setUser] = useState(null);

  const getUser = async () => {
  	try {
  		setUser(user1);
  	} catch (err) {
  		console.log(err);
  	}
  };

  useEffect(() => {
  	getUser();
  }, []);

  // console.log(user);
  return (
    <div>
    {/* <Navbar> */}
      <Routes>
        {/* <Route
					exact
					path="/auth/login/success"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/> */}
        <Route exact path="/" element=<SelectUser /> />

        <Route exact path="/selectUser" element=<SelectUser /> />

        {/* user */}
        <Route exact path="/login" element=<SignInScreen /> />
        <Route exact path="/signup" element=<SignUpScreen /> />

        <Route
          exact
          path="/home"
          element={user ? <HomeScreen /> : <SelectUser />}
        />

        <Route
          path="/booking/:hotelid"
          exact
          element={user ? <Booking /> : <SelectUser />}
        />
        <Route
          path="/CheckPage"
          exact
          element=<CheckPage /> 
        />
		
        <Route exact path="/bookform/:id" element=<BookingForm /> />

        <Route path="/ordersuccess" exact element={user ?<OrderSuccessfulScreen /> : <SelectUser />}/>

        {/* owner */}

        <Route exact path="/addhotel" element=<AddHotel /> />

        <Route exact path="/sort" element=<SortableTable /> />
        <Route exact path="/bookinghistory" element=<BookingHistory /> />
		
        <Route exact path="/admindashboard" element=<AdminDashBoard /> />
        <Route exact path="/edithotel" element=<EditHotel /> />

        <Route exact path="/adminhotel" element=<AdminHome /> />

        {/* <Route path="/placeorder/:hotelid" exact element={user ?<PlaceOrderScreen /> : <SelectUser />} /> */}
        <Route exact path="/service" element=<Service /> />
      </Routes>
      {/* </Navbar> */}
    </div>
  );
}

export default App;
