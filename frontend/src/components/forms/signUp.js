import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingUp.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [mobileno, setmobileno] = useState("");

  const nav = useNavigate();

  const registeruser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        mobileno,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      nav("/home");
      alert("successfully registered");
    } else if (data.status === "error") {
      alert("this account is already registered");
    }
  };

  /*const SingUp = () => {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhoneNo: "",
  });

  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: [value] });
  };*/

  return (
    <>
      <div className="cen">
        <div className="dis">
          <div className="form-card form-1">
            <div className="left-i">
              <img
                src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/ind.png"
                alt
              />
            </div>
            <div className="right s-form">
              <form action="#">
                <h1>Signup</h1>
                <div className="row">
                  <h2>Full Name</h2>
                  <div className="field">
                    <input
                      type="text"
                      required
                      name="userName"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      placeholder="Enter Your Full Name "
                    />
                    <i className="fa fa-user" />
                  </div>
                </div>
                <div className="row">
                  <h2>Mobile Number</h2>
                  <div className="field">
                    <input
                      type="text"
                      required
                      name="userPassword"
                      value={mobileno}
                      onChange={(e) => setmobileno(e.target.value)}
                      placeholder="Enter Your Password"
                    />
                    <i className="fa fa-phone" aria-hidden="true" />
                  </div>
                </div>
                <div className="row">
                  <h2>Email</h2>
                  <div className="field">
                    <input
                      type="text"
                      required
                      name="userEmail"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      placeholder="Enter Your Email"
                    />
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                  </div>
                </div>
                <div className="row">
                  <h2>Password</h2>
                  <div className="field">
                    <input
                      type="password"
                      required
                      autoComplete="off"
                      name="userPhoneNo"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      placeholder="Enter Your Mobile No."
                    />
                    <i className="fa fa-eye" aria-hidden="true" />
                  </div>
                </div>
                <div className="info">
                  <input
                    className="cd"
                    type="checkbox"
                    name
                    id
                    defaultChecked
                  />
                  <p>
                    I Agree With <span className="blue">Terms Of Services</span>{" "}
                    and
                    <span className="blue"> Privacy Policy. </span>
                  </p>
                </div>
                <div className="row">
                  <button onClick={registeruser} className="btns">
                    Sign Up
                  </button>
                </div>
                <div className="info">
                  Already have an account
                  <span className="blue">
                    <Link to="/login">Login</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
