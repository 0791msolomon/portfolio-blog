import { LIKE_POST } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case LIKE_POST:
      let arr = state;
      if (arr.includes(action.payload)) {
        return state;
      } else {
        arr.push(action.payload);

        return arr;
      }

    default:
      return state;
  }
}
