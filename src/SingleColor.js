import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ weight, rgb, index }) => {
  const bg_color = rgbToHex(...rgb);
  const [copyAlert, setcopyAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setcopyAlert(false), 3000);
    return () => clearTimeout(timeout);
  }, [copyAlert]);
  return (
    <>
      <article
        className={`color ${index > 10 && "color-light"}`}
        style={{ backgroundColor: `${bg_color}` }}
        onClick={() => {
          navigator.clipboard.writeText(bg_color);
          setcopyAlert(true);
        }}
      >
        <p className={`percent-value `}>{weight}%</p>
        <p className="color-value">{bg_color}</p>
        <p className="alert">{copyAlert ? "copied to clipboard" : ""}</p>
      </article>
    </>
  );
};

export default SingleColor;
