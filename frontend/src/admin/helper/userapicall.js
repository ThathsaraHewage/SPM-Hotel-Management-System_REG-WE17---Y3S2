import { API } from "../../backend";

export const addNewActivity = (userId, token, product) => {
    return fetch(`${API}/new-activity/add/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: product,
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const getAllActivities = () => {
    return fetch(`${API}/activities`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  export const deleteActivities = (productId, userId, token) => {
    return fetch(`${API}/activity/${productId}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  export const getProduct = productId => {
    return fetch(`${API}/activity/${productId}`, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/activity/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
