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
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log("Email:", values.email, "password:", values.password);
    const response = await Axios.post("http://localhost:4000/Register", {
      email: values.email,
      password: values.password,
    });
    console.log(response.data, response.status);
    if (response.status == 200) {
      alert("Sucessfull Authentication");
      window.location.href = "https://www.google.com";
    } else {
      alert("Failed to authenticate");
    }
  };
  const callApi = () => {
    (async () => {
      const response = await Axios.get("http://localhost:4000/Register");
      //   const response = await axios.post("http://localhost:4000/notes", { title: '', content:'Ezeh'});

      console.log(response.data, response.status);
    })().catch((error) => {
      console.error(error);
    });
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
          type="email"
          value={values.email}
          className="input-field"
          placeholder="Enter Your Email"
          name="username"
          required
          autoComplete="off"
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
      <button onClick={callApi}>Call</button>
    </div>
  );
}

export default Form;
