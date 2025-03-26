import React from "react";
import "./Sidebar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';



export default function Sidebar() {
  return (
    <container className="sidebar-container">
      <div className="sidebar-wrapper">
        <h1 className="sidebar-title">به داشبورد خودش امدید</h1>
        <ul className="sidebar-list">
          <li className="sidebar-list-item main">
            <icon className="icon">
                <HomeOutlinedIcon />
            </icon>
            صفحه اصلی
          </li>
          <li className="sidebar-list-item main">
            <icon className="icon">
            <CategoryOutlinedIcon />

            </icon>
            محصولات
          </li>
          <li className="sidebar-list-item main">
            <icon className="icon">
                <ForumOutlinedIcon />
            </icon>
            کامنت ها
          </li>
          <li className="sidebar-list-item main">
            <icon className="icon">
                <GroupOutlinedIcon />
            </icon>
            کاربران
          </li>
          <li className="sidebar-list-item main">
            <icon className="icon">
            <ShoppingCartOutlinedIcon />
            </icon>
            سفارشات
          </li>
          <li className="sidebar-list-item main">
            <icon className="icon">
           < PercentOutlinedIcon/>
            </icon>
            تخفیف ها
          </li>
        </ul>
      </div>
    </container>
  );
}
