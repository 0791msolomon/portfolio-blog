import axios from "axios";
let baseUrl = process.env.REACT_APP_BASEURL || "http://localhost:5000";

export const addComment = data => {
  return axios
    .put(`${baseUrl}/api/blog/${data.id}`, data)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};

export const addLike = id => {
  return axios
    .put(`${baseUrl}/api/blog/like/${id}`)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};
