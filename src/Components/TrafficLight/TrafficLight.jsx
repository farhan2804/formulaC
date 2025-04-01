import React, { useState, useEffect } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
  const [light, setLight] = useState("red");
  useEffect(() => {
    let timer = setInterval(
      () => {
        //logic to glow lights
        if (light === "red") setLight("yellow");
        else if (light === "yellow") setLight("green");
        else setLight("red");
      },
      light === "green" ? 4000 : light === "yellow" ? 2000 : 3000
    );
    return () => clearInterval(timer);
  }, [light]);

  return (
    <div className="traffic-light">
      <div className={`light ${light === "red" ? "activeRed" : ""} `}></div>
      <div
        className={`light ${light === "yellow" ? "activeYellow" : ""}`}
      ></div>
      <div className={`light ${light === "green" ? "activeGreen" : ""}`}></div>
    </div>
  );
};

export default TrafficLight;
