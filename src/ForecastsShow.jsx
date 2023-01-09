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
      <h3>H: {props.forecast.high}</h3>
      <h3>L: {props.forecast.low}</h3>
      <h3>{props.forecast.body} MPH</h3>
      <div>
        <form class="col-lg-6 offset-lg-3" onSubmit={handleSubmit}>
          <div class="col-lg-6 offset-lg-3">
            <h4>Zipcode:</h4>{" "}
            <input defaultValue={props.forecast.zipcode} name="title" type="text" className="form-control" />
          </div>

          <button class="col-lg-6 offset-lg-3" type="submit">
            Update Post
          </button>
        </form>
        <button onClick={handleClick}> Delete</button>
      </div>
    </div>
  );
}
