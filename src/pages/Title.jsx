import React from "react";
import "./Title.css";

export default function Title({ data }) {
  return (
    <>
      <div className="title-page">
        <h1>Title</h1>
        <p>Select a Title</p>
        <h3>{data[25].Title}</h3>
      </div>
    </>
  );
}
