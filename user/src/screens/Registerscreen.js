import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./../actions/userActions";
import Loading from "./../components/Loading";
import Success from "./../components/Success";
import Error from "./../components/Error";

export default function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;

  const dispatch = useDispatch();

  function register() {
    if (password === conpassword) {
      const user = {
        name,
        email,
        address,
        mobile,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    } else {
      alert("Password doesn't match");
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User registered successfully" />}
          {error && <Error error="Email already registered" />}

          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input
              type="text"
              required
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Address"
              className="form-control"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Mobile"
              className="form-control"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              required
              placeholder="Confirm password"
              className="form-control"
              value={conpassword}
              onChange={(e) => {
                setConpassword(e.target.value);
              }}
            />
            <button className="btn mt-3 mb-3" onClick={register}>
              Register
            </button>
            <br />
            <a style={{ color: "black" }} href="/login">
              If you have an acount, click here to login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
