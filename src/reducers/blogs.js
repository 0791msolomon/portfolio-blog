import { GET_BLOGS } from "../actions";
import axios from "axios";
export default function(state = [], action) {
  switch (action.type) {
    case GET_BLOGS:
      return axios.get("http://localhost:5000/api/blog").then(response => {
        return response.data;
      });

    default:
      return state;
  }
}
