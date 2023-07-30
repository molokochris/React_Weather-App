import React from "react";

const WeatherIcons = ({ code, dayNight }) => {
  const iconClass = `wi wi-owm-${dayNight}:${code}`;
  console.log(iconClass)
  return <i className={iconClass}></i>;
};

export default WeatherIcons;
