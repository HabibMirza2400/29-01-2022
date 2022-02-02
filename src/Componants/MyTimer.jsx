import React from "react";
import { useState } from "react";
import "./myTime.css";


export const MyTimer = () => {
    const [time, setTime] = useState(0);
    setTimeout(() => {
        setTime(time + 1);
    } 1000);
    return (
        <div>
            <h1>timer:{time}</h1>
        </div>

    );
};