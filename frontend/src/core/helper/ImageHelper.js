import React from "react";
import { API } from "../../backend";

export const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : `https://media.istockphoto.com/vectors/error-like-laptop-with-dead-emoji-cartoon-flat-minimal-trend-modern-vector-id1011988208?k=6&m=1011988208&s=612x612&w=0&h=6l7ZtOJxcQ_xTThiNX_X0XWKRDx9rKZzgjSePb0XmtQ=`;
  return (
    <div style={{ maxWidth: "100%" }}>
      <img
        src={imageUrl}
        alt="jpg"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="text-center"
      />
    </div>
  );
};

export const DinningImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/dinning-photo/${product._id}`
    : `https://media.istockphoto.com/vectors/error-like-laptop-with-dead-emoji-cartoon-flat-minimal-trend-modern-vector-id1011988208?k=6&m=1011988208&s=612x612&w=0&h=6l7ZtOJxcQ_xTThiNX_X0XWKRDx9rKZzgjSePb0XmtQ=`;
  return (
    <div style={{ maxWidth: "100%" }}>
      <img
        src={imageUrl}
        alt="jpg"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="text-center"
      />
    </div>
  );
};

export const AccomodationImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/accomodation-photo/${product._id}`
    : `https://media.istockphoto.com/vectors/error-like-laptop-with-dead-emoji-cartoon-flat-minimal-trend-modern-vector-id1011988208?k=6&m=1011988208&s=612x612&w=0&h=6l7ZtOJxcQ_xTThiNX_X0XWKRDx9rKZzgjSePb0XmtQ=`;
  return (
    <div style={{ maxWidth: "100%" }}>
      <img
        src={imageUrl}
        alt="jpg"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="text-center"
      />
    </div>
  );
};

export const ActivitiesImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/activities-photo/${product._id}`
    : `https://media.istockphoto.com/vectors/error-like-laptop-with-dead-emoji-cartoon-flat-minimal-trend-modern-vector-id1011988208?k=6&m=1011988208&s=612x612&w=0&h=6l7ZtOJxcQ_xTThiNX_X0XWKRDx9rKZzgjSePb0XmtQ=`;
  return (
    <div style={{ maxWidth: "100%" }}>
      <img
        src={imageUrl}
        alt="jpg"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="text-center"
      />
    </div>
  );
};
