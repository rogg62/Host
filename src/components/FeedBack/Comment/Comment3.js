import React from "react";
import "./style.css";
import Star from "./assets/Rating.svg";

const Comment3 = () => {
  return (
    <div id="commentFeedBack">
      <h1>Fasted!</h1>
      <img src={Star} alt="" />
      <div id="paragraf">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
    </div>
  );
};

export default Comment3;
