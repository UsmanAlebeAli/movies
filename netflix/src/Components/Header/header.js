import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="Header-outer-container">
      <div className="Header-container">
        <div className="Header-left">
          <ul>
            <li>
              <img src={logo} alt="netflix logo" width="100" />
            </li>
            <li>Netflix</li>
            <li>Home </li>
            <li>TVShows</li>
            <li>Movies </li>
            <li>Latest </li>
            <li>Mylist</li>
            <li>Brouse by language</li>
          </ul>
        </div>
        <div className="Header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
