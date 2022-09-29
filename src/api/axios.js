import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "226d253fbf86f74892298aac48a4ceaf",
    language: "ko-KR",
  },
});

export default instance;
