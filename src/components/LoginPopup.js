import React, { useContext, useEffect, useState } from "react";
import "./Popup.css";
import { login } from "../Services/AuthenticationService";
import ViwaContext from "../Store/context-api";

const LoginPopup = ({ closePopup, openSignUpPopup }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { handleSetUser } = useContext(ViwaContext);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    login({ email, password })
      .then((res) => {
        handleSetUser(res.data.data);
        window.localStorage.setItem(
          "token",
          JSON.stringify(res.data.data.token)
        );
        setIsLoading(false);
        closePopup();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

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

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Email</label>
          <input
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
            type="email"
            name="email"
          />
          <label>Password</label>
          <input
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
            type="password"
            name="password"
          />
          <button type="submit">{isLoading ? "..." : "Login"}</button>
        </form>
        <p onClick={openSignUpPopup}>Don't have an account?</p>
      </div>
    </div>
  );
};

export default LoginPopup;
