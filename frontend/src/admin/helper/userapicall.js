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


/////////////delete a room type from the list///////////////////////
export const deleteVenueType = (productId, userId, token) => {
    return fetch(`${API}/venue/${productId}/${userId}`, {
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
    return fetch(`${API}/venue/${productId}`, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };
  export const getVenue = venueId => {
    return fetch(`${API}/room/${venueId}`, {
      method: "GET"
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

export const getAllVenues = () => {
  return fetch(`${API}/venue-types/venue`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const loadVenueDetails = (productId, userId, token, product) => {
  return fetch(`${API}/room/${productId}/${userId}`, {
    method: "GET",
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
export const PlaceBooking = (userId, token, product) => {
  return fetch(`${API}/venue/book/${userId}`, {
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