import { SELECT_BLOG } from "../actions";
import axios from "axios";
// let baseUrl = process.env.baseUrl
export default function(state = [], action) {
  switch (action.type) {
    case SELECT_BLOG:
      return action.payload.data;

    default:
      return state;
  }
}
