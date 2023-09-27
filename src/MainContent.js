import React from "react";
import "./App.css";

function MainContent(props) {
  const { nasaData } = props;
  // if (!nasaData) return <h3>Yükleniyor...</h3>;

  return (
    <div>
      <h1>🚀{nasaData.title} </h1>
      <span>{nasaData.date}</span>
      <p>{nasaData.explanation}</p>
      <span>{nasaData.media_type}</span>
      <img src={nasaData.url} />
    </div>
  );
}
export default MainContent;
