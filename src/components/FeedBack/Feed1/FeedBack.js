import React from "react";
import "./FeedBack.css";
import { NavLink, Outlet } from "react-router-dom";

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
        <Outlet />
      </div>
    </section>
  );
};

export default FeedBack;
