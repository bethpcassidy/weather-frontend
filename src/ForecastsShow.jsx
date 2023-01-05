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
          Title: <input defaultValue={props.forecast.zipcode} name="title" type="text" className="form-control" />
        </div>
        <button type="Submit">Update Post</button>
      </form>
      <button onClick={handleClick}> Delete</button>
    </div>
  );
}
