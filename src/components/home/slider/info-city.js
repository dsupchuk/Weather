import { useMemo } from "react";
import useFetch from "../../../hooks/useFetch";
import { getData } from "../../../utils/dateUtils";
import { formatTemperature } from "../../../utils/numberUtils";
function InfoCity(props) {
  const { data, loading, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${props.name}&appid=880ead9db0b266c93aa9a311c591e185`
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

  return (
    <div className="slider-city">
      <div className="bg-gray">
        <p>Sky: {data?.weather && data.weather[0].main}</p>
        <img
          className="weather-icon"
          src={img}
          alt="error"
          style={{
            width: "100px",
            height: "100px",
          }}
        ></img>
        <p>Description: {data?.weather && data.weather[0].description}</p>
      </div>
      <div className="bg-gray temper">
        <p>Temperature: {formatTemperature(data?.main?.temp)} °C</p>
        <p>Feels like: {formatTemperature(data?.main?.feels_like)} °C</p>
        <p>Temp_max: {formatTemperature(data?.main?.temp_max)} °C</p>
        <p>Temp_min: {formatTemperature(data?.main?.temp_min)} °C</p>
        <p>Pressure: {data?.main?.pressure} hPa</p>
        <p>Humidity: {data?.main?.humidity} %</p>
      </div>
      <div className="bg-gray temper">
        <p>Sunrise: {getData(data?.sys?.sunrise)}</p>
        <p>Sunset: {getData(data?.sys?.sunset)}</p>
      </div>
      <p className="bg-gray">Visibility: {data.visibility} meter</p>
    </div>
  );
}
export default InfoCity;
