import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import SearchBar from "./SearchBar";

function App() {
  const [nasaData, setnasaData] = useState("");
  const [selectedDate, setSelectedDate] = useState("2020-07-22");
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=6JtzkEh41cRbKlb40psyQqOnXmk6LsQkw1U7OOGD&date=${selectedDate}`
      )
      .then((response) => {
        console.log(response);
        setnasaData(response.data);
      })
      .catch((error) => {
        console.error(error.response.message);
      });
  }, [selectedDate]);
  return (
    <div className="App">
      <p>
        <span role="img" aria-label="go!">
          <SearchBar val={selectedDate} dateChange={setSelectedDate} />
          <MainContent nasaData={nasaData} />
        </span>
      </p>
    </div>
  );
}

export default App;
