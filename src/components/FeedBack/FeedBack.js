import React from "react";
import "./FeedBack.css";
import { NavLink, BrowserRouter, Route, Routes } from "react-router-dom";

import Comment1 from "./Comment/Comment1";
import Comment2 from "./Comment/Comment2";
import Comment3 from "./Comment/Comment3";

const FeedBack = () => {
  return (
    <section id="FeedBack">
      <div id="FeedTitle">
        <h1>Customer says about Hostingin</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
      </div>

      <div id="FeedContent">
        <BrowserRouter>
          <nav>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "pending"
              }
            >
              <div id="avatar"></div>
              <div id="infoName">
                <h1>Shoo Phar Nhoe</h1>
                <p>Kang Masak</p>
              </div>
            </NavLink>
            <NavLink
              to="/comment2"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "pending"
              }
            >
              <div id="avatar"></div>
              <div id="infoName">
                <h1>Shoo Phar Nhoe</h1>
                <p>Kang Masak</p>
              </div>
            </NavLink>
            <NavLink
              to="/comment3"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "pending"
              }
            >
              <div id="avatar"></div>
              <div id="infoName">
                <h1>Shoo Phar Nhoe</h1>
                <p>Kang Masak</p>
              </div>
            </NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Comment1 />} />
            <Route path="/comment2" element={<Comment2 />} />
            <Route path="/comment3" element={<Comment3 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  );
};

export default FeedBack;
