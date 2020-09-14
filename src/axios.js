import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-react-133ca.cloudfunctions.net/api",
  // "http://localhost:5001/clone-react-133ca/us-central1/api",
});

export default instance;
