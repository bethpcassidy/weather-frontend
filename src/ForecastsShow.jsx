import "./forecastsshow.css";

export function ForecastsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateForecast(props.forecast.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyForecast(props.forecast);
  };

  return (
    <div>
      <h1>Forecast for {props.forecast.title}</h1>
      <h2>Temperature: {props.forecast.average}°F</h2>
      <h3>H: {props.forecast.high}°F</h3>
      <h3>L: {props.forecast.low}°F</h3>
      <h3>{props.forecast.body}</h3>
      <div id="buttons">
        <form class="col-lg-6 offset-lg-3" onSubmit={handleSubmit}>
          <div class="col-lg-6 offset-lg-3">
            <h4>Zipcode:</h4>{" "}
            <input defaultValue={props.forecast.zipcode} name="title" type="text" className="form-control" />
          </div>

          <button class="col-lg-6 offset-lg-3" type="submit">
            Update Forecast
          </button>
        </form>
        <div class="col-lg-6 offset-lg-3">
          <button class="col-lg-6 offset-lg-3" onClick={handleClick}>
            {" "}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
