import api from "./api-helper";

export const loginUser = async (loginData) => {
  const resp = await api.post("/auth/login", { authentication: loginData }); //making a post request to an endpoint with some data
  localStorage.setItem("authToken", resp.data.token); //saving token to local storage for login..Setting key as authToken...pulling login data from backend
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`; //setting up our authorization header with our login token
  return resp.data.user; //returning user data
};

export const registerUser = async (registerData) => {
  const resp = await api.post("/users/", { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
  //this is the same as login user, except the endpoint is different
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken"); //grabs token from localstorage
  if (token) {
    //checkign to see if we have the token
    api.defaults.headers.common.authorization = `Bearer ${token}`; //setting our token to our authorization header
    const resp = await api.get("/auth/verify"); //then we make a call to get our data
    return resp.data; //lets just return our data

    //if you have a token in your headers, we will give back the user data associated with that token
  }
  return null;
  //else just return null
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};

//clear out token when logging out
