import React, { useState } from "react";
import Axios from "axios";

const Notes = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
  });
  const handleTitleChange = (event) => {
    setValues({ ...values, title: event.target.value });
  };
  const handleContentChange = (event) => {
    setValues({ ...values, content: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Note Submitted");
    alert("Submitted");
    (async () => {
      const response = await Axios.post("http://localhost:4000/notes", {
        title: values.title,
        content: values.content,
      });

      console.log(response.data, response.status);
      console.log("STATATSTST", response.status);
    })().catch((error) => {
      console.error(error.response.status, error.response);
      if (error.response.status >= 400) {
        alert("Error: " + error.response.data.message);
      }
    });
  };
  const requestNote = () => {
    Axios.get("http://localhost:4000/notes").then((response) => {
      console.log(response.data.body);
    });
  };
  return (
    <div>
      <div className="notes-container">
        <button className="callApi" onClick={requestNote}>
          Call
        </button>
        <form className="notes-form" onSubmit={handleSubmit}>
          <input
            onChange={handleTitleChange}
            value={values.title}
            type="text"
            className="input-field"
            name="title"
            placeholder="Title"
          ></input>
          <textarea
            onChange={handleContentChange}
            value={values.content}
            className="input-field"
            name="content"
            placeholder="Enter your Note"
          ></textarea>
          <button className="submit-Btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Notes;
