import React from "react";

export default function Profile() {
  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid", marginTop: "10px" }}
          src="https://robohash.org/sahil.png?size=200x200"
          alt="pic"
        />
        <h5>Sahil Moktan</h5>
        <h6>Email - info@sahilmoktan.com</h6>
      </div>
      <h3>Your quotes</h3>
      <blockquote>
        <h6>am learning GraphQl</h6>
      </blockquote>
      <blockquote>
        <h6>will master GraphQl</h6>
      </blockquote>
    </div>
  );
}
