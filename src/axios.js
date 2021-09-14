import axios from "axios";
const instance = axios.create({
    baseURL: "https://takatak-backend.herokuapp.com/",
});

export default instance;