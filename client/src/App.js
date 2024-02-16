import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddHotel from "./pages/AddHotel";
import Login1 from "./components/Login1";
import LoginPage from "./components/LoginPage";
import "./App.css";
import Service from "./components/ServicePage";
import SignUpPage from "./components/SignUpPage";
import EditHotel from "./pages/EditHotel";
import AdminHome from "./pages/AdminHotel";
import SignInScreen from "./pages/SignInScreen";
// import FoodDetailScreen from "./pages/FoodDetailScreen";
import SignUpScreen from "./pages/SignUpScreen";
import HomeScreen from "./pages/HomeScreen";

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
				
				{/* <Route
					exact
					path="/fooddetail"
					element=<FoodDetailScreen />
				/> */}
				<Route
					exact
					path="/addhotel"
					element=<AddHotel />
				/>
				<Route
					exact
					path="/adminhotel"
					element=<AdminHome />
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