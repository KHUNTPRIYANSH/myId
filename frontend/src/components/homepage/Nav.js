import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import annex from "../Context/Context";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";
import { Hidden } from "@mui/material";
import UserFirstChar from "../admin/UserFirstChar";

const Nav = () => {
  const [isUser, setIsUser] = useState(false);
  const backtouserlogin = () => {
    alert("login first");
  };
  const hidMenu = () => {
    let hide = document.getElementById("cls");
    hide.style.right = "-500px";
  };
  const showMenu = () => {
    let hide = document.getElementById("cls");
    hide.style.right = "0px";
  };

  const { listshow, currentuser, loginuser } = useContext(annex);

  useEffect(() => {
    const token = localStorage.getItem("utoken");
    if (token) {
      console.log("token");
      setIsUser(true);
    } else setIsUser(false);
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <img
            src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/gov-logo.png"
            alt=""
          />
        </div>
        <div className="logo-txt">
          <div className="t-title">
            Sports,Youth & Cultural Activities Department
          </div>
          <h3 className="s-title">Government of Gujarat</h3>
          <h5></h5>
        </div>
        <div className="logo-txt" style={{ flex: 0.1 }}>
          {/* <h3 className="s-title">{currentuser}</h3> */}
        </div>

        <IconButton onClick={showMenu}>
          <MenuIcon className="bar" />
        </IconButton>
      </nav>

      <div className="hid-menu" id="cls">
        <div className="close" onClick={hidMenu}>
          <IconButton>
            <CloseIcon className="close-btn" />
          </IconButton>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          {listshow && <NavLink to="/list">List</NavLink>}
          {!listshow && <NavLink to="/">About</NavLink>}
          {/* {!listshow && <NavLink to="/">ID Card</NavLink>} */}
          {/* <NavLink to="/" onClick={backtouserlogin}>
          Events
        </NavLink> */}
          <NavLink to="/">Contact</NavLink>
          {/* {isUser && <NavLink to="/profile">Profile</NavLink>} */}
          {/* <NavLink to="/">Log out</NavLink> */}
        </div>
        <div className="nav-btn">
          <Link to="/adminLogin">
            <div className="btn btn-adm">Admin</div>
          </Link>
          <Link to="/login">
            <div className="btn btn-art">Artist</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
