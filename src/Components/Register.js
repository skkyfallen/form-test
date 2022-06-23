import React, { useState } from "react";
import "./Form.css";
import form_bg from "./form_bg.jpg";
import form_main from "./form_main.jpg";
import Axios from "axios";
function Form() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log("email:", values.email + "password:", values.password);
    console.log("submitted");
    alert("successfull Login");
  };
  return (
    <div>
      {submitted ? (
        <div className="success-message">Success !! Thank You</div>
      ) : null}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login">Register</h2>

        <input
          onChange={handleEmailChange}
          type="text"
          value={values.email}
          className="input-field"
          placeholder="Enter Your Email"
          name="username"
          required
          autocomplete="off"
        />
        <input
          onChange={handlePasswordChange}
          type="password"
          value={values.password}
          className="input-field"
          placeholder="Enter Password"
          name="password"
          required="required"
        />
        <button type="submit" className="Register-btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
