import React, { useState } from "react";
import "./BGDisplay.css";
import {  Button } from "react-bootstrap";
// Row, Col,
export const BGDisplay = () => {
  const [cls, setCls] = useState("bulbOff");
  return (
    <div className={cls}>
      <Button
        onClick={() => (cls === "bulb" ? setCls("bulbOff") : setCls("bulb"))}
        variant={cls === "bulb" ? "danger" : "success"}
      >
        {cls === "bulb" ? "Off" : "On"}
      </Button>
    </div>
  );
};
