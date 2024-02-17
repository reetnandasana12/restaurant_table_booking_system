import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";

import { useSelector , useDispatch } from 'react-redux'

import { userRegister } from '../redux/action/userActions'

function Signup() {

	const dispatch = useDispatch()

	const history = useNavigate();
	const [email,setEmail] = useState('')
	const [password,setPassport] = useState('')


	const googleAuth = () => {
		
		localStorage.setItem("user",JSON.stringify(email))
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};


	async function submit(e){
		// e.preventDefault();


		dispatch(userRegister({email,password}))
		console.log(e)
	}
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Sign up Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/signup.jpg" alt="signup" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Create Account</h2>
					<input type="text" className={styles.input} placeholder="Username" />
					<input type="text" className={styles.input} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
					<input
						type="passport"
						className={styles.input}
						placeholder="Passport"
						onChange={(e)=>{setPassport(e.target.value)}}
					/>
					<button type="submit" onClick={submit} className={styles.btn}>Sign Up</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sign up with Google</span>
					</button>
					<p className={styles.text}>
						Already Have Account ? <Link to="/login">Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Signup;