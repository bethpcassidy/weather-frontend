export function ForecastsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateForecast(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Forecast</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Zipcode: <input name="zipcode" type="text" />
        </div>
        <div>
          high: <input name="high" type="text" />
        </div>
        <div>
          low: <input name="low" type="text" />
        </div>
        <div>
          average: <input name="average" type="text" />
        </div>
        <div>
          image: <input name="image" type="text" />
        </div>
        <div>
          body: <input name="body" type="text" />
        </div>
        <button type="submit">Create Forecast</button>
      </form>
    </div>
  );
}
