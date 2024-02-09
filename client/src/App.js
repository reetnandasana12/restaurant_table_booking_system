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

function App() {
	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};
	

	useEffect(() => {
		getUser();
	}, []);

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
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					exact
					path="/login1"
					element=<Login1 />
				/>
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
					path="/edithotel"
					element=<EditHotel />
				/>
				<Route
					exact
					path="/loginpage"
					element=<LoginPage />
				/>
				<Route
					exact
					path="/service"
					element=<Service />
				/>
				<Route
					exact
					path="/signuppage"
					element=<SignUpPage />
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
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