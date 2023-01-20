import "./new.css";

export function ForecastsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateForecast(params, () => event.target.reset());
  };

  return (
    <div id="search">
      <div class="overlay"></div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source
          src="src/assets/No Copyright Drone Shots _ Royalty free drone shots _ free stock videos _ Drone footage nature shots.mp4"
          type="video/mp4"
        />
      </video>
      <div class="container h-100">
        <h1 class="row justify-content-center">What's the Weather?</h1>
        <form class="col-lg-6 offset-lg-3" onSubmit={handleSubmit}>
          <div class="row justify-content-center">
            <h4 class="row justify-content-center">Zipcode:</h4> <input name="zipcode" type="text" />
          </div>
          <div class="row justify-content-center">
            <button class="btn btn-secondary" type="submit">
              Find Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
