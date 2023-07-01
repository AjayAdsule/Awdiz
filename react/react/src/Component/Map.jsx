import React from "react";
import Data from "./Data";
const Map = () => {
  return (
    <React.Fragment>
      {Data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Map;
