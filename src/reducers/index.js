import { combineReducers } from "redux";
import blogs from "./blogs";
import activeBlog from "./ActiveBlog";
const rootReducer = combineReducers({
  blogs,
  activeBlog
});
export default rootReducer;
