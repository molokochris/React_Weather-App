import React from "react";
import "../assets/stylesheets/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faMap } from "@fortawesome/free-regular-svg-icons";
import { BsGear } from "react-icons/bs";
import { GiNestedEclipses } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { FaCloudsmith } from "react-icons/fa";
import { LiaMapSolid, LiaMapPinSolid } from "react-icons/lia";
import { RiApps2Line } from "react-icons/ri";
import { WiCloud, WiStormShowers } from "react-icons/wi";
import WeatherIcons from "./WeatherIcons";
import logo from '../../public/SkyBits.png'

export default function Dashboard(props) {
  const { list, city } = props.weather;
  const dayNight = list[0].sys.pod == "d";
  const code = list[0].weather[0].id;
  console.log(list, city);

  return (
    <div className="dashboard-container">
      <div className="image-container"></div>
      <div className="info-container">
        <div className="current">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="more-info">2</div>
      </div>
    </div>
  );
}
