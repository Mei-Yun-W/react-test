import React, { useState } from "react";
import "./Ham.css";

export const Ham = () => {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="ham">
        <div className="sp">
          <span></span>
          <span></span>
          <span></span>
          <button onClick={() => setOpen(!open)}>aaa</button>
          <p>{count}</p>
        </div>
        {open ? (
          <div className="menu">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>1</li>
              <li>2</li>
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
