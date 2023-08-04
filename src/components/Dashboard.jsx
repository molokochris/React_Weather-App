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
// import logo from '../../public/SkyBits.png'
import logo from "../../public/Logo PNG.png";
import { Link } from "react-router-dom";
import xlogo from '../../public/skybits.png'

export default function Dashboard(props) {
  const { list, city } = props.weather;
  const dayNight = list[0].sys.pod == "d";
  const code = list[0].weather[0].id;
  console.log(list, city);

  // fill empty array
  const array = [
    {
      index: 1,
    },
    {
      index: 2,
    },
    {
      index: 3,
    },
    {
      index: 4,
    },
    {
      index: 5,
    },
    {
      index: 6,
    },
    {
      index: 7,
    },
    {
      index: 8,
    },
    {
      index: 9,
    },
    {
      index: 10,
    },
    {
      index: 11,
    },
    {
      index: 12,
    },
  ];
  // let index = 0;

  console.log();

  return (
    <>
      <div className="dashboard-container">
        <div className="image-container"></div>
        <div className="info-container">
          <div className="current">
            <div className="logo">
              <img src={xlogo} alt="" />
              {/* <img src={logo} alt="" /> */}
            </div>
            <div className="forecast">
              <h1>{Math.floor(list[0].main.temp)}&deg;</h1>
              <h4 className="location">
                {city.name}, {city.country}
              </h4>
              {/* <br /> */}
              <h6 className="description">{list[0].weather[0].description}</h6>
              <div className="day-forecast">
                {/* <div className="hour">
                <h6>1</h6>
                <span>
                  <img src={logo} alt="" />
                </span>
                <h6>10&deg;</h6>
              </div> */}
                {array.map(({ index }) => {
                  return (
                    <div className="hour">
                      <h6>{list[index].dt_txt[11] + list[index].dt_txt[12]}</h6>
                      <span>
                        <img src={logo} alt="" />
                      </span>
                      <h6>{Math.floor(list[index].main.temp)}&deg;</h6>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="more-info">
            <div className="main">1</div>
            <div className="main-extra">2</div>
            <div className="wind">3</div>
            {/* <div className="">4</div> */}
          </div>
        </div>
      </div>
      <p style={{textAlign:"center", height:"fit-content"}}>
        UI designed by https://www.behance.net/6133cf01 & coded by Moloko Chris
        Poopedi
      </p>
    </>
  );
}
