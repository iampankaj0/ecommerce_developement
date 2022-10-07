import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../images/logo_main.png";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
// import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [sidebarState, setsidebarState] = useState(true);

  const handleNavOpener = () => {
    if (sidebarState) {
      setsidebarState(false);
    } else {
      setsidebarState(true);
    }
  };

  return (
    <div
      className="sidebar"
      style={{
        height: !sidebarState && "50px",
        width: !sidebarState && "50px",
        position: !sidebarState && "fixed",
        left: !sidebarState && "0",
        top: !sidebarState && "0",
        background: !sidebarState && "transparent",
        zIndex: !sidebarState && "9999",
      }}
    >
      {!sidebarState && (
        <button
          style={{ position: "absolute", top: "10px", left: "6px" }}
          className="sidebar_openbtn"
          onClick={handleNavOpener}
        >
          <MenuIcon />
        </button>
      )}
      <div style={{ display: sidebarState ? "flex" : "none" }}>
        <div className="logo_btn">
          <NavLink to="/">
            <img src={logo} alt="EcommerceLogo" />
          </NavLink>
          <button className="sidebar_closebtn" onClick={handleNavOpener}>
            <CloseIcon />
          </button>
        </div>
        <NavLink to="/admin/dashboard">
          <p>
            <DashboardIcon /> Dashboard
          </p>
        </NavLink>
        <NavLink to="/admin/products">
          <p>
            <PostAddIcon /> Products
          </p>
        </NavLink>
        <NavLink to="/admin/product">
          <p>
            <AddIcon /> Create Product
          </p>
        </NavLink>
        <NavLink to="/admin/orders">
          <p>
            <ListAltIcon /> Orders
          </p>
        </NavLink>
        <NavLink to="/admin/users">
          <p>
            <PeopleIcon /> Users
          </p>
        </NavLink>
        <NavLink to="/admin/reviews">
          <p>
            <RateReviewIcon /> Reviews
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
