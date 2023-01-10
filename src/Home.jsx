import axios from "axios";
import { useState, useEffect } from "react";
import { ForecastsIndex } from "./ForecastsIndex";
import { ForecastsNew } from "./ForecastsNew";
import { Modal } from "./Modal";
import { ForecastsShow } from "./ForecastsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  // const forecasts = [
  //   { id: 1, zipcode: 11111, high: 29, low: 21, average: 24, image: "holder", body: "body" },
  //   { id: 2, zipcode: 11112, high: 27, low: 23, average: 26, image: "holder2", body: "body2" },
  // ];

  const [forecasts, setForecasts] = useState([]);
  const [isForecastsShowVisible, setIsForecastsShowVisible] = useState(false);
  const [currentForecast, setCurrentForecast] = useState({});

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

  const handleShowForecast = (forecast) => {
    console.log("handleShowForecast", forecast);
    setIsForecastsShowVisible(true);
    setCurrentForecast(forecast);
  };

  const handleUpdateForecast = (id, params, successCallback) => {
    console.log("handleUpdateForecast", params);
    axios.patch(`http://localhost:3000/forecasts/${id}.json`, params).then((response) => {
      setForecasts(
        forecasts.map((forecast) => {
          if (forecast.id === response.data.id) {
            return response.data;
          } else {
            return forecast;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsForecastsShowVisible(false);
  };

  const handleDestroyForecast = (forecast) => {
    console.log("handleDestroyForecast", forecast);
    axios.delete(`http://localhost:3000/forecasts/${forecast.id}.json`).then((response) => {
      setForecasts(forecast.filter((p) => p.id !== forecast.id));
      handleClose;
    });
  };

  useEffect(handleIndexForecasts, []);

  return (
    <div>
      <ForecastsNew onCreateForecast={handleCreateForecast} />
      <ForecastsIndex forecasts={forecasts} onShowForecast={handleShowForecast} />
      <Modal show={isForecastsShowVisible} onClose={handleClose}>
        <ForecastsShow
          forecast={currentForecast}
          onUpdateForecast={handleUpdateForecast}
          onDestroyForecast={handleDestroyForecast}
        />
      </Modal>
    </div>
  );
}
