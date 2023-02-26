/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import {BiUser} from "react-icons/bi"
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "../assest/LogoB.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="container">
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <div>{<img className="logo" src={logo} alt="hola" />}</div>
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
      <div className="perfil">
        <div className="container_text">
          <h3 className="name">pato batman programador</h3>
          <h3 className="rol">Rol: admin</h3>
        </div>
        <div className="dropDown">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="user"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <div className="dropDownContent">
            <Link to="/" className="links">
            <div style={{ display: "flex", alignItems: "center" ,justifyContent:"space-between", width:"100%"}}>
              <p>Perfil</p>
              <BiUser/>
              </div>
            </Link>
            <Link to="/" className="links">
              <div style={{ display: "flex", alignItems: "center" ,justifyContent:"space-between", width:"100%"}}>
                <p>Logout</p>
                < IoIosLogOut/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;