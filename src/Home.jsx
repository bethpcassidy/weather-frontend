import axios from "axios";
import { useState, useEffect } from "react";
import { ForecastsIndex } from "./ForecastsIndex";
import { ForecastsNew } from "./ForecastsNew";

export function Home() {
  // const forecasts = [
  //   { id: 1, zipcode: 11111, high: 29, low: 21, average: 24, image: "holder", body: "body" },
  //   { id: 2, zipcode: 11112, high: 27, low: 23, average: 26, image: "holder2", body: "body2" },
  // ];

  const [forecasts, setForecasts] = useState([]);

  const handleCreateForecast = (params, successCallback) => {
    console.log("handleCreateForecast", params);
    axios.post("http://localhost:3000/forecasts.json", params).then((response) => {
      setForecasts([...forecasts, response.data]);
      successCallback();
    });
  };

  const handleIndexForecasts = () => {
    console.log("handleIndexForecasts");
    axios.get("http://localhost:3000/forecasts.json").then((response) => {
      console.log(response.data);
      setForecasts(response.data);
    });
  };

  useEffect(handleIndexForecasts, []);

  return (
    <div>
      <ForecastsNew onCreateForecast={handleCreateForecast} />
      <ForecastsIndex forecasts={forecasts} />
    </div>
  );
}
