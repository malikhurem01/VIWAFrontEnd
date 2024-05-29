// src/components/SignupPopup.js
import React, { useEffect, useState } from "react";
import "./Popup.css";
import { register } from "../Services/AuthenticationService";

const SignupPopup = ({ closePopup, openLoginPopup }) => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState();
  const handleClickOutside = (event) => {
    if (event.target.className === "popup") {
      closePopup();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    register({
      firstName: name,
      lastName,
      email,
      password,
      gender: parseInt(gender),
    })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.data.token));
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Sign Up</h2>
        <form>
          <label>First Name</label>
          <input
            onChange={(ev) => setName(ev.target.value)}
            value={name}
            type="text"
            name="name"
          />
          <label>Last Name</label>
          <input
            onChange={(ev) => setLastName(ev.target.value)}
            value={lastName}
            type="text"
            name="lastName"
          />
          <label>Email</label>
          <input
            onChange={(ev) => setEmail(ev.target.value)}
            value={email}
            type="email"
            name="email"
          />
          <label>Gender</label>
          <select
            onChange={(ev) => setGender(ev.target.value)}
            value={gender}
            name="gender"
          >
            <option value="">Select gender</option>
            <option value={2}>Female</option>
            <option value={1}>Male</option>
          </select>
          <label>Password</label>
          <input
            onChange={(ev) => setPassword(ev.target.value)}
            value={password}
            type="password"
            name="password"
          />
          <button type="submit" onClick={handleFormSubmit}>
            Sign Up
          </button>
        </form>
        <p onClick={openLoginPopup}>Already have an account?</p>
      </div>
    </div>
  );
};

export default SignupPopup;
