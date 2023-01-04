export function ForecastsIndex(props) {
  return (
    <div>
      <h1>All Forecasts</h1>
      {props.forecasts.map((forecast) => (
        <div key={forecast.id}>
          <h2>{forecast.zipcode}</h2>
          <p>{forecast.high}</p>
          <p>{forecast.low}</p>
          <p>{forecast.average}</p>
          <p>{forecast.body}</p>
          <p>{forecast.image}</p>
          <button onClick={() => props.onShowForecast(forecast)}>More info</button>
        </div>
      ))}
    </div>
  );
}
