import axios from "axios";

export const BaseUrl = "https://warrior-backend.herokuapp.com/v1/";

const setHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { secret_token: token },
  };
};

export const Post = (path, body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseUrl + path, body, setHeader())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const Auth = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseUrl + path, setHeader())
      .then((res) => resolve(res))
      .catch((err) => console.log(err));
  });
};

export const Get = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseUrl + path, setHeader())
      .then((res) => resolve(res.data))
      .catch((err) => console.log(err));
  });
};

export const Delete = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BaseUrl + path, setHeader())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const Put = (path, body) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseUrl + path, body, setHeader())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
