import { combineReducers } from "redux";
import blogs from "./blogs";
import activeBlog from "./ActiveBlog";
import likes from "./LikePosts";
const rootReducer = combineReducers({
  blogs,
  activeBlog,
  likes
});
export default rootReducer;
