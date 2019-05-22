import { SELECT_BLOG, CLEAR_BLOG, UPDATE_ACTIVE, ADD_REPLY } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case SELECT_BLOG:
      return action.payload.data;

    case UPDATE_ACTIVE:
      return {
        body: state.body,
        image: state.image,
        likes: state.likes ? (state.likes += 1) : (state.likes = 1),
        replies: [...state.replies] || [],
        time: state.time,
        title: state.title,
        _id: state._id
      };
    case ADD_REPLY:
      return {
        body: state.body,
        image: state.image,
        likes: state.likes || 0,
        replies: [...state.replies, action.payload],
        time: state.time,
        title: state.title,
        _id: state._id
      };

    case CLEAR_BLOG:
      return [];
    default:
      return state;
  }
}
