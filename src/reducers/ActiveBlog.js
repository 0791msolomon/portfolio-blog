import { SELECT_BLOG, CLEAR_BLOG } from "../actions";
import axios from "axios";
// let baseUrl = process.env.baseUrl
export default function(state = [], action) {
  switch (action.type) {
    case SELECT_BLOG:
      return action.payload.data;

    case CLEAR_BLOG:
      return [];
    default:
      return state;
  }
}
