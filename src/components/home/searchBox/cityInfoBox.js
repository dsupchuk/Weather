import { useMemo } from "react";
import useFetch from "../../../hooks/useFetch";
import { formatTemperature } from "../../../utils/numberUtils";
import { getData } from "../../../utils/dateUtils";
import "./searchBoxItem.css";
export const CityInfoBox = ({ name }) => {
  const { data, loading, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=880ead9db0b266c93aa9a311c591e185`
  );
  const img = useMemo(
    () =>
      data?.weather
        ? `https://openweathermap.org/img/w/${data?.weather[0].icon}.png`
        : null,
    [data?.weather]
  );
  if (loading) return "loading...";
  if (error) {
    console.log("error", error);

    return null;
  }

  if (data.cod === 200) {
    return (
      <div>
        <div className="box-list">
          <h3>{name.toUpperCase()}</h3>
          <p>Sky: {data?.weather && data.weather[0].main}</p>
          <img
            className="weather-icon"
            src={img}
            alt="error"
            style={{
              width: "80px",
              height: "80px",
            }}
          ></img>
          <p>Temperature: {formatTemperature(data?.main?.temp)} °C</p>
          <p>Feels like: {formatTemperature(data?.main?.feels_like)} °C</p>
          <p>Temp_max: {formatTemperature(data?.main?.temp_max)} °C</p>
          <p>Temp_min: {formatTemperature(data?.main?.temp_min)} °C</p>
          <p>Humidity: {data?.main?.humidity} %</p>
          <p>Sunrise: {getData(data?.sys?.sunrise)}</p>
          <p>Sunset: {getData(data?.sys?.sunset)}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
