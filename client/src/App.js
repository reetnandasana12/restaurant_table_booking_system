import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import AddHotel from "./pages/AddHotel";
import "./App.css";
import Service from "./components/ServicePage";
import SignUpPage from "./components/SignUpPage";
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

function App() {

	const isAuthenticatedUser = localStorage.getItem("email");
  const user = localStorage.getItem("email");
	const [setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};
	
	console.log(user);

	useEffect(() => {
		getUser();
	}, []);

	console.log(user);
	return (
		<div>
			<Routes>
				{/* <Route
					exact
					path="/auth/login/success"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/> */}
				<Route
					exact
					path="/"
					element={user ? <Navigate to="/home1" /> : <SignInScreen />}
				/>
				
				<Route
					exact
					path="/login"
					element=<SignInScreen />
				/>
				<Route
					exact
					path="/signup"
					element=<SignUpScreen />
				/>
				<Route
					exact
					path="/home1"
					element=<HomeScreen />
				/>
				
				<Route path='/booking/:hotelid' exact element=<Booking/>/>
				
				
				<Route path='/placeorder/:hotelid' exact element=<PlaceOrderScreen/>/>

				
				<Route path='/ordersuccess' exact element=<OrderSuccessfulScreen/>/>
				{/* <Route
					exact
					path="/fooddetail"
					element=<FoodDetailScreen />
				/> */}
				
				<Route exact path="/hotel" element={<HotelDetails/>} />
				
				<Route
					exact
					path="/addhotel"
					element=<AddHotel />
				/>
				<Route
					exact
					path="/edithotel"
					element=<EditHotel />
				/>
				
				<Route
					exact
					path="/adminhotel"
					element=<AdminHome />
				/>
				<Route
					exact
					path="/selectUser"
					element=<SelectUser />
				/>
				
				
				<Route
					exact
					path="/service"
					element=<Service />
				/>
				<Route
					path="/home"
					element={user ? <Navigate to="/" /> : <Home />}
				/>
			</Routes>
		</div>
	);
}

export default App;