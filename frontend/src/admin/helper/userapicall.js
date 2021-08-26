import { API } from "../../backend";

///////////////////////add research paper call by the Researcher////////////////////
export const AddNewFoodItem = (userId, token, product) => {
  return fetch(`${API}/new-food-item/add/${userId}`, {
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

/////////// Display all Food items in the table view //////////////////
export const getAllFoodItems = () => {
  return fetch(`${API}/food-items`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/////////////delete food item from the list///////////////////////
export const deleteFoodItem = (productId, userId, token) => {
  return fetch(`${API}/food/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//not modified

export const getFoodItem = (productId) => {
  return fetch(`${API}/food/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateFoodItem = (productId, userId, token, product) => {
  return fetch(`${API}/food/${productId}/${userId}`, {
    method: "PUT",
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
