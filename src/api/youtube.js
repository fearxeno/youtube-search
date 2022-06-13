import axios from "axios";

const KEY = "AIzaSyCHb_ZSPUjdhhProP2Y6q4ZfHKe_X2kp5s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
