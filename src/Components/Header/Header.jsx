import React from "react";
import "./Header.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import IconButton from '@mui/material/IconButton';




export default function Header() {
  return (
    <header>
      <container className="header-container">
        <div className="header-wrapper">
          <div className="profile">
            <div className="profile-image">
              <img src="./userPic/profile.png" alt="profile" />
            </div>
            <div className="user-info">
              <h1> سروش مرادی</h1>
              <p> فرانت اند دولوپر</p>
            </div>
          </div>
          <div className="header-left">
           <form className="header-search">
            <input type="text" placeholder="دنبال چی میگردی؟" />
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
           </form>
           <div className="header-icon">
           <NotificationsNoneOutlinedIcon />
           </div>
           <div className="header-icon">
           < LightModeOutlinedIcon/>
           </div>
          </div>
        </div>
      </container>
    </header>
  );
}
