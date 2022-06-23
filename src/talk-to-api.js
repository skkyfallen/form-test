import axios from "axios";

(async () => {
  const response = await axios.get("http://localhost:4000/notes/62b30a6b7e9f2ec4efb93b6d");
//   const response = await axios.post("http://localhost:4000/notes", { title: '', content:'Ezeh'});

  console.log(response.data, response.status);
})().catch((error) => {
  console.error(error);
});
