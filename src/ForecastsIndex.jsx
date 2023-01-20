export function ForecastsIndex(props) {
  return (
    <div id="forecast-index">
      <h1 className="text-center">Your Forecasts</h1>
      <br />
      <div className="posts row text-bg-light mb-3">
        {props.forecasts.map((forecast) => (
          <div className="col-4" key={forecast.id}>
            <br />
            <h2 className="card-title text-center">
              {forecast.title}, {forecast.average}
            </h2>
            <br />
            <div className="d-grid gap-2 mx-auto">
              <button className="btn btn-dark" onClick={() => props.onShowForecast(forecast)}>
                More
              </button>
              <br />
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
