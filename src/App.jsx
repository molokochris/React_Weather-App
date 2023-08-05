import { Route, Routes } from "react-router-dom";
import "./App.css";
// import "/assets/stylesheets/locator.css";
import "./assets/stylesheets/locator.css";
import CurrentLocation from "./assets/images/navigation.png";
import { useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import logo from "../public/skybits.png";

function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(
    JSON.parse(localStorage.getItem("weather"))
  );
  // const [weather, setWeather] = useState("");

  
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

  console.log(process.env.REACT_APP_API_KEY);

  console.log(days[today.getDay() - 1]);
  // const navigate = useNavigate();

  const [storage, setStorage] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("weather")) {
  //     setStorage();
  //   }
  // });

  useEffect(() => {
    const handleBeforeUnload = () => {
      getLocation();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Check if it's the first load, set the flag in local storage to true, and reload the page
    if (localStorage.getItem("firstLoadDone") === null) {
      setStorage();
      localStorage.setItem("firstLoadDone", "true");
      console.log("This is the initial load");
      window.location.reload(); // Reload the page after setting the flag
    } else {
      console.log("This is a page refresh");
    }
  }, []);

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
        window.location.reload();
        console.log(data);
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
          <img src={logo} alt="" className="site-logo" />
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
