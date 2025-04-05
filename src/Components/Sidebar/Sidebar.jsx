import React from "react";
import "./Sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <container className="sidebar-container">
      <div className="sidebar-wrapper">
        <h1 className="sidebar-title">به داشبورد خودش امدید</h1>
        <ul className="sidebar-list">
          <li className="sidebar-list-item main">
            <Link to="/" >       
                <HomeOutlinedIcon />
              صفحه اصلی
            </Link>
          </li>
          <li className="sidebar-list-item main">
            <Link to="/products" >   
                <CategoryOutlinedIcon />  
              محصولات
            </Link>
          </li>
          <li className="sidebar-list-item main">
            <Link to="/comments" >
                <ForumOutlinedIcon />
              کامنت ها
            </Link>
          </li>
          <li className="sidebar-list-item main">
            <Link to="/users">
                <GroupOutlinedIcon />
              کاربران
            </Link>
          </li>
          <li className="sidebar-list-item main">
            <Link to="/shoppingcart">
                <ShoppingCartOutlinedIcon />
              سفارشات
            </Link>
          </li>
          <li className="sidebar-list-item main">
            <Link to="/offers">
                <PercentOutlinedIcon />
              تخفیف ها
            </Link>
          </li>
        </ul>
      </div>
    </container>
  );
}
