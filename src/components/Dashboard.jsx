import React from "react";
import "../assets/stylesheets/dashboard.css";

export default function Dashboard(props) {
  const weather = props.weather;
  console.log(weather);

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="side-menu">
          <span className="logo">SkyBits</span>
          <hr />
          <ul className="s-list">
            <li><MdPanorama/></li>
            <li><WiDaySunny/></li>
            <li><MdPalette/></li>
            <li><HiCalendar/></li>
            <li><AiFillSetting/></li>
          </ul>
        </div>
        <div className="main-menu">main-menu</div>
      </div>
    </div>
  );
}
