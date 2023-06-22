import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import dayOfWeek from "./Date";
import { day, month, year } from "./Date";
import "../App.css";

function Temp() {
  const [location, setLocation] = useState(null);
  const [country, setCountry] = useState(null);
  const [name, setName] = useState(null);
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState("");

  const handlechange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi();
  };

  const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=32c8401e4c1686aa0e9949edb96de00f`;
    const response = await fetch(url);

    const resJson = await response.json();
    setLocation(resJson.main);
    setCountry(resJson.sys);
    setName(resJson.name);
    setIcon(resJson.weather[0]);
    console.log(resJson.weather[0]);
  };

  const weatherIcon = `https://openweathermap.org/img/wn/${icon.icon}@2x.png`;
  return (
    <div id="weather">
      <form className="weather-form" onSubmit={handleSubmit}>
        <input
          
          type="search"
          placeholder="Enter Your location"
          onChange={handlechange}
          value={city}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
      {!location ? (
        <p>Data not found</p>
      ) : (
        <div className="weather-data">
          <h1>
            {name},{country.country}
          </h1>
          <h6>
            {dayOfWeek} {day} {month} {year}
          </h6>
          <h1>{location.temp}&deg;C</h1>
          <div className="icon">
            <img src={weatherIcon} alt={icon.main} />
            <h5>{icon.main}</h5>
          </div>
          <h3>
            {location.temp_min} °C / {location.temp_max} °C
          </h3>
        </div>
      )}
    </div>
  );
}

export default Temp;
