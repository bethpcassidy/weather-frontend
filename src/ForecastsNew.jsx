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
        <button type="submit">Create Forecast</button>
      </form>
    </div>
  );
}
