import React from "react";
import "./Rating.css";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
export default function Rating({ score = "5" }) {
  let totalStars = 5;
  let stars = Array(totalStars).fill(<StarOutlinedIcon />);

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className={`star ${index < score ? "filled" : ""}`}>
          {star}
        </span>
      ))}
    </div>
  );
}