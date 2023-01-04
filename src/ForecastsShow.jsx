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
      <h1>Photo information</h1>
      <p>zipcode: {props.forecast.zipcode}</p>
      <p>average: {props.forecast.average}</p>
      <p>body: {props.forecast.body}</p>
      <form onSubmit={handleSubmit}>
        <div>
          zipcode: <input defaultValue="props.forecast.zipcode" zipcode="zipcode" type="text" />
        </div>
        <div>
          body: <input defaultValue="props.forecast.body" body="body" type="text" />
        </div>
        <div>
          high: <input defaultValue="props.forecast.high" high="high" type="text" />
        </div>
        <div>
          low: <input defaultValue="props.forecast.low" low="low" type="text" />
        </div>
        <div>
          average: <input defaultValue="props.forecast.average" average="average" type="text" />
        </div>
        <button onClick={handleClick}>Destroy forecast</button>
      </form>
    </div>
  );
}
