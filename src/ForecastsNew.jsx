export function ForecastsNew() {
  return (
    <div>
      <h1>New Forecast</h1>
      <form>
        <div>
          Zipcode: <input name="zipcode" type="text" />
        </div>
        <button type="submit">Create Forecast</button>
      </form>
    </div>
  );
}
