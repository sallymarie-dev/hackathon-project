import React from "react";
import "../Title.css";

export default function Title({ data }) {
  return (
    <>
      <div className="title-page">
        <div className="title-header">

          <img src="/moviecard.jpeg" alt="movie cover" width={300} />

          <h3>{data[25].Title}</h3>
          <h6> Rating: {data[25].Rating}</h6>
          <h6>Genre: {data[25].Genre}</h6>
        </div>
      </div>
    </>
  );
}
