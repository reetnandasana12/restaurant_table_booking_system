import Brand from "../components/Form/Brand";
import Button from "../components/Form/Button";
import GoogleSignIn from "../components/Form/GoogleSignIn";
import TextField from "../components/Form/TextField";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import useAuth from '../hooks/useAuth'

const SignInScreen = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  function submit(e) {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:6005/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data === "not_exist") {
            alert("user have not sign up");
          }else if (res.data === "inv_pass") {
            alert("incorrect password");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch {
      console.log(e);
    }
  }

  //form inputs
  const Inputs = [
    {
      id: 1,
      type: "email",
      placeholder: "Email",
      value: `${email}`,
      name: "email",
    },
    {
      id: 2,
      type: "password",
      placeholder: "Password",
      value: `${password}`,
      name: "password",
    },
  ];
  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        {/* logo  */}
        <Brand />
        {/* sign up form  */}
        <form
          className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg"
          onSubmit={submit}
        >
          <div className="flex flex-col space-y-6">
            {Inputs.map((input) => (
              <TextField
                key={input.id}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                name={input.name}
                onChange={(e) => {
                  input.name === "email"
                    ? setEmail(e.target.value)
                    : setpassword(e.target.value);
                }}
              />
            ))}
          </div>
          <Button text="Sign In" />
          <Link to="/signup">
            <p className="text-base text-primary text-center my-6 hover:underline">
              Need an account ?
            </p>
          </Link>

          <GoogleSignIn text="Sign In With Google" />
        </form>
      </div>
    </main>
  );
};

export default SignInScreen;
