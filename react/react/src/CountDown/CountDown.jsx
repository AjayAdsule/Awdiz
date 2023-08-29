/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

const CountDown = ({ time, direction, callBack }) => {
  function count() {
    if (direction === "clockwise") {
      for (let i = 0; i <= time; i++) {
        console.log(i);
      }
    } else if (direction === "anti-clockwise") {
      for (let i = time; i >= 0; i--) {
        console.log(i);
      }
    }
    callBack();
  }
  count();
 
  return <React.Fragment></React.Fragment>;
};

export default CountDown;
