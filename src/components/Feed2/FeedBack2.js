import React from "react";
import "./style.css"
import { NavLink, Outlet } from "react-router-dom";

const FeedBack2 = () => {
  return (
    <section id="FeedBack1">
      <div id="FeedTitle1">
        <h1>Customer says about Hostingin</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
      </div>

      <div id="FeedContent1">
        <nav>
          <NavLink
          end
            to="/services"
            className={({ isActive, isPending }) =>
              isPending ? "pending2" : isActive ? "active2" : "pending2"
            }
          >
            <div id="avatar"></div>
            <div id="infoName">
              <h1>Shoo Phar Nhoe</h1>
              <p>Kang Masak</p>
            </div>
          </NavLink>
          
          <NavLink
          end
            to="/services/comment2"
            className={({ isActive, isPending }) =>
              isPending ? "pending2" : isActive ? "active2" : "pending2"
            }
          >
            <div id="avatar"></div>
            <div id="infoName">
              <h1>Shoo Phar Nhoe</h1>
              <p>Kang Masak</p>
            </div>
          </NavLink>
          <NavLink
          end
            to="/services/comment3"
            className={({ isActive, isPending }) =>
              isPending ? "pending2" : isActive ? "active2" : "pending2"
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

export default FeedBack2;
