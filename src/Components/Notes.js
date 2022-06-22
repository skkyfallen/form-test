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
    (async () => {
      const response = await Axios.get("http://localhost:4000/notes/");
      //   const response = await axios.post("http://localhost:4000/notes", { title: '', content:'Ezeh'});

      console.log(response.data, response.status);
    })().catch((error) => {
      console.error(error);
    });
    alert("Submitted");
  };
  return (
    <div>
      <div className="notes-container">
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
