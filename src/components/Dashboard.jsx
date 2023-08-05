import React, { useState } from "react";
import "../assets/stylesheets/dashboard.css";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { FiSearch } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import xlogo from "../../public/skybits.png";
import Modal from "./Modal";

export default function Dashboard(props) {
  const { list, city } = props.weather;
  const dayNight = list[0].sys.pod == "d";
  const code = list[0].weather[0].id;
  const [location, setLocation] = useState("");

  // console.log(list, city);

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

  // console.log(location);

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
            <div className="search">
              <input
                type="text"
                placeholder="search your city"
                onChange={(e) => setLocation(e.target.value)}
              />
              <button>
                <FiSearch />
              </button>
            </div>
            <div className="forecast">
              <h1>{Math.floor(list[0].main.temp)}&deg;</h1>
              <h4 className="location">
                {city.name}, {city.country}
              </h4>
              {/* <br /> */}
              <h6 className="description">
                <img
                  src={`https://openweathermap.org/img/w/${list[0].weather[0].icon}.png`}
                  alt=""
                />
                {list[0].weather[0].description}
              </h6>
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
                        <img
                          src={`https://openweathermap.org/img/w/${list[index].weather[0].icon}.png`}
                          alt=""
                        />
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
      <p style={{ textAlign: "center", height: "fit-content" }}>
        UI designed/Inspired by{" "}
        <a href="https://www.behance.net/6133cf01" target="_blank">
          Maria
        </a>{" "}
        & coded by{" "}
        <a href="https://www.linkedin.com/in/molokochris" target="_blank">
          Moloko Chris Poopedi
        </a>
      </p>
    </>
  );
}
