import { API } from "../../backend";

///////////////////////add research paper call by the Researcher////////////////////
export const AddNewRoomType = (userId, token, product) => {
  return fetch(`${API}/new-room-type/add/${userId}`, {
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
export const getAllRoomTypes = () => {
  return fetch(`${API}/room-types`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};


/////////////delete a room type from the list///////////////////////
export const deleteRoomType = (productId, userId, token) => {
    return fetch(`${API}/room/${productId}/${userId}`, {
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



//not modified

export const getProduct = productId => {
    return fetch(`${API}/room/${productId}`, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/room/${productId}/${userId}`, {
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


export const getAllApprovedsResearchPapers = () => {
  return fetch(`${API}/approved/research-papers`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};