import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1792d11a7f46497f810ad0ffb5540c9b",
  },
});
