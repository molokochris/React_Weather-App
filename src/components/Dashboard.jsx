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

export default function Dashboard(props) {
  const { list, city } = props.weather;
  const dayNight = list[0].sys.pod == "d";
  const code = list[0].weather[0].id;
  console.log(list, city);

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="side-menu">
          <div className="logo">
            <FaCloudsmith
              style={{ fontSize: "x-large", color: "rgba(99, 99, 99, 0.8)" }}
            />
            <span
              className="logo-text"
              style={{
                fontFamily: "Concert one, cursive ",
                color: "rgba(250, 250, 250, 0.6)",
              }}
            >
              SkyBits
            </span>
          </div>
          <div className="side-items">
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>
                <RiApps2Line />
              </li>
              <li>
                <GiNestedEclipses />
              </li>
              <li>
                <LiaMapSolid />
              </li>
              <li>
                <SlCalender />
              </li>
              <li>
                <BsGear />
              </li>
            </ul>
          </div>
        </div>
        <div className="main-menu">
          <div className="rw-1">
            <div className="col-1">
              <div className="main-info">
                <i className="wi wi-day-sunny img"></i>
                <span className="temp">{Math.floor(list[0].main.temp)}&deg;C</span>
                <div className="i-sp">
                  <WiStormShowers style={{ fontSize: "xx-large" }} />
                  <span style={{ fontSize: "medium" }}>
                    {list[0].weather[0].description}
                  </span>
                </div>
              </div>
              <div className="extra-info">
                <div className="i-sp">
                  <LiaMapPinSolid className="icons" />
                  <span>
                    {city.name}, {city.country}
                  </span>
                </div>
                <div className="i-sp">
                  <SlCalender className="icons" />
                  <span>23 July 2023 5:23 AM</span>
                </div>
              </div>
            </div>
            <div className="col-2">Today's Highlight</div>
          </div>
          <div className="rw-2">
            <div className="rw-2a">
              <div className="col-1 s-col">7 days Forecast</div>
              <div className="col-2 s-col">Weather condition map</div>
            </div>
            <div className="rw-2b">
              <div className="col-1">col-1</div>
              <div className="col-2">col-2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
