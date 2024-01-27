<<<<<<< HEAD
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";

=======
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
>>>>>>> parent of 2f42f45 (Delete client directory)
=======
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
>>>>>>> parent of 2f42f45 (Delete client directory)

function Signup() {
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
<<<<<<< HEAD
<<<<<<< HEAD


	const history = useNavigate();
	const [email,setEmail] = useState('')
	const [password,setPassport] = useState('')

	async function submit(e){
		e.preventDefault();


		try{
			await axios.post("http://localhost:6005/signup/",{
				email,password
			}).then(res=>{
				if(res.data=== "exists")
				{
					alert("user already exist")
				}
				else if(res.data === "not_exists")
				{
						history("/home",{state:{id:email}})
				}
			}).catch(e=>{

				alert("wrong details")
				console.log(e);
			})

		}catch{
				console.log(e);
		}
	}
=======
>>>>>>> parent of 2f42f45 (Delete client directory)
=======
>>>>>>> parent of 2f42f45 (Delete client directory)
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> parent of 2f42f45 (Delete client directory)
					<input type="text" className={styles.input} placeholder="Email" />
					<input
						type="password"
						className={styles.input}
						placeholder="Password"
					/>
					<button className={styles.btn}>Sign Up</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sing up with Google</span>
<<<<<<< HEAD
>>>>>>> parent of 2f42f45 (Delete client directory)
=======
>>>>>>> parent of 2f42f45 (Delete client directory)
					</button>
					<p className={styles.text}>
						Already Have Account ? <Link to="/login">Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

<<<<<<< HEAD
<<<<<<< HEAD
export default Signup;
=======
export default Signup;
>>>>>>> parent of 2f42f45 (Delete client directory)
=======
export default Signup;
>>>>>>> parent of 2f42f45 (Delete client directory)
