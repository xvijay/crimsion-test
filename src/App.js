import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

const Homepage = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setApiData(data.products));
  }, []);
  useEffect(() => {
    console.log(apiData.products);
  });

  return (
    <>
      <div className="main_title">Knowledge Base</div>
      <hr className="main_title_hr"></hr>
      <div className="main_container">
        {apiData.map((item, index) => {
          console.log(item);
          return (
            <div className="card-container" key={index}>
              <div>
                <img src={item.images[0]} />
              </div>
              <div style={{ padding: "1rem" }}>
                <div
                  className=""
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Brand : {item.brand}</div>
                  <div>{item.category}</div>
                </div>
                <div className="card_title">{item.title}</div>
                <div>{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [intervals, setIntervals] = useState();
  const [pause, setPause] = useState(false);

  const startTimer = (timer) => {
    const timerCounter = setInterval(() => {
      setTimer((prevCount) => prevCount + 1);
    }, 1000);
    setIntervals(timerCounter);
  };

  const resetTimer = () => {
    setTimer(0);
    clearInterval(intervals);
  };
  const pauseTimer = () => {
    clearInterval(intervals);
  };

  return (
    <>
      <div>{timer}</div>
      <div>
        <button onClick={() => startTimer()}>Start</button>
        <button
          onClick={() => {
            pauseTimer();
          }}
        >
          pause
        </button>
        <button
          onClick={() => {
            resetTimer();
          }}
        >
          reset
        </button>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/timer" element={<Timer></Timer>}></Route>
        </Routes>
        {/* 
        <Homepage></Homepage> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
