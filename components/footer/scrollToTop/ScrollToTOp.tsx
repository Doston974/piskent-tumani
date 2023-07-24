"use-client";
import React, { useState } from "react";
import "./style.css";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setVisible(true) : setVisible(false);
  });

  return (
    <div className="animate-pulse">
      <div className="div">
        <a href="#" className={`${visible ? "block" : "none"}`}>
          <FaChevronUp />
        </a>
      </div>
    </div>
  );
};

export default ScrollToTop;
