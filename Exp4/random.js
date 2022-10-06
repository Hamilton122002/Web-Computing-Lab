import React, { useState, useEffect } from "react";
export default function random() {
    const [sampleNumber, setSampleNumber] = useState(null);
    const getRandomNumber = () => {
        let min = 1;
        let max = 99;
        setSampleNumber(Math.round(Math.random() * (max - min) + min))
    }
  return (
    <div className="random">
      <h1>{`Generate random number on click of the button`}</h1>
      <button onClick={() => getRandomNumber()}>{'Generate'}</button>
      <p>{sampleNumber}</p>
    </div>
  );
}
