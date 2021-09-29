import { API } from "../../backend";

///////////////////////add research paper call by the Researcher////////////////////
export const AddNewVenueType = (userId, token, product) => {
  return fetch(`${API}/new-venue-type/add/${userId}`, {
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

/////////// Display all room types in the table view //////////////////
export const getAllVenueTypes = () => {
  return fetch(`${API}/venue-types`, {
    method: "GET",
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


/////////////delete a room type from the list///////////////////////
export const deleteVenueType = (productId, userId, token) => {
    return fetch(`${API}/venue/${productId}/${userId}`, {
      method: "DELETE",
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
    return fetch(`${API}/venue/${productId}`, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  
  export const getActivity = productId => {
    return fetch(`${API}/activity/${productId}`, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  export const updateActivity = (productId, userId, token, product) => {

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


export const getFoodItem = (productId) => {
  return fetch(`${API}/food/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/venue/${productId}/${userId}`, {
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

