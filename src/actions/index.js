import axios from "axios";
export const SELECT_ITEM = "SELECT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SELECT_MENU = "SELECT_MENU";
export const GET_BLOGS = "GET_BLOGS";
export const SELECT_BLOG = "SELECT_BLOG";

export const selectBlog = async item => {
  let base = process.env.BASE_URL || "http://localhost:5000/api/blog";
  let response = axios.get(`${base}/${item}`);
  return {
    type: SELECT_BLOG,
    payload: response
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
