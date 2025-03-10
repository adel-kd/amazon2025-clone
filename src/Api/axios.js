import axios from "axios";

const axiosInstance = axios.create({
  // local instance
  // baseURL: "http://127.0.0.1:5001/clone-ff0b9/us-central1/api",
  //deployed version of amazon server on Render.com
  baseURL: "https://amazon-api-deploy-2as6.onrender.com",
});

export { axiosInstance };
