import { API } from "../../backend";

///////////////////////add a new room type call/////////////////
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

///////////////////////display all AC rooms in a seperate page ////////////////////
export const getAllACRooms = () => {
  return fetch(`${API}/room-types/ac`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

///////////////////////display all non AC rooms in a seperate page ////////////////////
export const getAllnonACRooms = () => {
  return fetch(`${API}/room-types/non-ac`, {
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


//////////////////////////////////////////////////////////////////////////
///////////////////////////Customer API Call//////////////////////////////
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://

//this is similar to update call
//get room details from the db to book a room
export const getRoom = roomId => {
  return fetch(`${API}/room/${roomId}`, {
    method: "GET"
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

///////////////////////add a booking call/////////////////
export const AddBooking = (userId, token, product) => {
  return fetch(`${API}/room/book/${userId}`, {
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
