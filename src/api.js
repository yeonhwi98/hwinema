import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "933630eb672b2bb0350bc6e4a59c0082",
    language: "ko-KR",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComming: () => api.get("movie/upcoming"),
};
