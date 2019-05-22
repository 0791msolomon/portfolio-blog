import { SELECT_BLOG, CLEAR_BLOG, UPDATE_ACTIVE } from "../actions";
import axios from "axios";
// let baseUrl = process.env.baseUrl
export default function(state = [], action) {
  switch (action.type) {
    case SELECT_BLOG:
      return action.payload.data;

    case UPDATE_ACTIVE:
      return {
        body: state.body,
        image: state.image,
        likes: (state.likes += 1),
        replies: [...state.replies],
        time: state.time,
        _id: state._id
      };
    // return action.payload;
    case CLEAR_BLOG:
      return [];
    default:
      return state;
  }
}
