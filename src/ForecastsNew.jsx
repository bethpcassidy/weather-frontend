export function ForecastsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateForecast(params, () => event.target.reset());
  };

  return (
    <div>
      <h1 class="row justify-content-center">What's the Weather?</h1>
      <form class="col-lg-6 offset-lg-3" onSubmit={handleSubmit}>
        <div class="row justify-content-center">
          <h4 class="row justify-content-center">Zipcode:</h4> <input name="zipcode" type="text" />
        </div>
        <div class="row justify-content-center">
          <button class="btn btn-secondary" type="submit">
            Create Forecast
          </button>
        </div>
      </form>
    </div>
  );
}
