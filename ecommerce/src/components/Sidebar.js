import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  function menuShow() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  function linkCLick() {
    setShowMenu(false);
  }
  return (
    <>
      <nav className="nav-bar">
        <div className="brand-name">Sachin Rathee</div>

        <div className="toggle-button" onClick={menuShow}>
          <FaBars className="bars" color="#222" size={22} />
        </div>
        <div
          className={showMenu ? "show-menu menu-items" : "hide-menu menu-items"}
        >
          <ul>
            {/* <li className={showMenu ? "profileImageShow" : "profileImageHide"}>
              <div className="profile-bg">
                {/* <div className="profile"></div>
              </div>
            </li> */}
            <li onClick={linkCLick}>
              <a href="#section1">Home</a>
            </li>
            <li onClick={linkCLick}>
              <a href="#section3">Trending</a>
            </li>
            <li onClick={linkCLick}>
              <a href="#section4">Best Seller</a>
            </li>
            {/* <li onClick={linkCLick}>
              <a href="#section4">Skills</a>
            </li>
            <li onClick={linkCLick}>
              <a href="#section4">Interests</a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
