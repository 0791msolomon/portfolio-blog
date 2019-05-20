import axios from "axios";
export const SELECT_ITEM = "SELECT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SELECT_MENU = "SELECT_MENU";
export const GET_BLOGS = "GET_BLOGS";
export const SELECT_BLOG = "SELECT_BLOG";
export const CLEAR_BLOG = "CLEAR_BLOG";
export const selectBlog = async item => {
  let base = process.env.REACT_APP_BASEURL || "http://localhost:5000";
  let response = axios.get(`${base}/api/blog/${item}`);
  return {
    type: SELECT_BLOG,
    payload: response
  };
};
export const clearBlog = () => {
  return {
    type: CLEAR_BLOG
  };
};
export const getBlogs = async () => {
  try {
    let response = axios.get("http://localhost:5000/api/blogs");
    return {
      type: GET_BLOGS,
      payload: response.data
    };
  } catch (err) {
    return {
      type: GET_BLOGS,
      payload: []
    };
  }
};

export const changeMenu = item => {
  return {
    type: SELECT_MENU,
    payload: item
  };
};
export const deleteItem = item => {
  return {
    type: DELETE_ITEM,
    payload: item
  };
};

export const selectItem = item => {
  return {
    type: SELECT_ITEM,
    payload: item
  };
};
