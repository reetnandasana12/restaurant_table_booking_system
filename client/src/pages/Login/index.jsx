import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector , useDispatch } from 'react-redux'
import { userLogin } from '../redux/action/userActions'
function Login() {

	const dispatch = useDispatch()


	// const history = useNavigate();

	const [email,setEmail] = useState('')
	const [password,setpassword] = useState('')

	const googleAuth = () => {
		
		localStorage.setItem("user",email)
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};



	 function submit(e) {
		e.preventDefault();
	dispatch(userLogin({email,password}));

}
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Log in Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/login.jpg" alt="login" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Members Log in</h2>
					<input type="email" className={styles.input} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
					<input type="password" className={styles.input} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password" />
					<button type="submit" onClick={submit} className={styles.btn}>Log In</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sign in with Google</span>
					</button>
					<p className={styles.text}>
						New Here ? <Link to="/signup">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
