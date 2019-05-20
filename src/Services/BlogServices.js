import axios from "axios";
let baseUrl = process.env.BASE_URL || "http://localhost:5000/api/blog/";

export const addComment = data => {
  return axios
    .put(`${baseUrl}${data.id}`, data)
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
    .put(`${baseUrl}/like/${id}`)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};
