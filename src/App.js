import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  /*  */
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const colors = new Values(color).all(10);
      setColors(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${error ? "error" : null}`}
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {colors.map((item, index) => {
          return <SingleColor key={index} {...item} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
