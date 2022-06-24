import React, { useState } from "react";
import "./Form.css";
import form_bg from "./form_bg.jpg";
import form_main from "./form_main.jpg";
import Axios from "axios";
function Form() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleUsernameChange = (event) => {
    setValues({ ...values, username: event.target.value });
  };
  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log("Email:", values.username, "password:", values.password);
    const response = await Axios.post("http://localhost:4000/Login", {
      username: values.username,
      password: values.password,
    });
    console.log(response.data, response.status);
    if (response.status == 200) {
      alert("Sucessfull Authentication");
    } else {
      alert("Authentication Failed");
    }
  };
  return (
    <div>
      {submitted ? (
        <div className="success-message">Success !! Thank You</div>
      ) : null}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login">Login</h2>

        <input
          onChange={handleUsernameChange}
          type="text"
          value={values.username}
          className="input-field"
          placeholder="Enter Your Username"
          name="username"
          required
          autoComplete="on"
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
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
