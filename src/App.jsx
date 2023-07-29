import { Route, Routes } from "react-router-dom";
import "./App.css";
// import "/assets/stylesheets/locator.css";
import "./assets/stylesheets/locator.css";
import CurrentLocation from "./assets/images/navigation.png";
import { useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(localStorage.getItem("weather"));
  const apiKey = "3021580a31e6c76b379d08b7a93f24cc";
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const today = new Date();

  console.log(days[today.getDay() - 1]);
  // const navigate = useNavigate();

  const [storage, setStorage] = useState("");

  useEffect(() => {
    if (window.localStorage) {
      setStorage();
    }
  });

  // console.log(localStorage.getItem("weather"));
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Make API call to OpenWeatherMap
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        // 'data.daily' contains the daily forecasts for the next 7 days
        // console.log(data);

        // Save the weather forecast to local storage
        localStorage.setItem("weather", JSON.stringify(data));
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  const error = () => {
    console.log("unable to get user location");
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
      console.log("available");
    } else {
      console.log("unavailable");
    }
  };
  return (
    <>
      {weather ? (
        <Dashboard weather={weather} />
      ) : (
        <div className="locator">
          <h1 className="">Snap.Plan.Prepare</h1>
          <span>Let us take a snap of your location</span>
          <div className="getLocation">
            <img src={CurrentLocation} alt="" onClick={getLocation} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
