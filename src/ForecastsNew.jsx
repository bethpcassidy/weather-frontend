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
      <video
        src="https://rr2---sn-ab5l6nrk.c.drive.google.com/videoplayback?expire=1674267175&ei=5xHLY6OULsHq1bYPtved6Ag&ip=24.228.119.248&cp=QVRMVkNfVlFVRlhPOmZvd3MwdFhxU0c1dXpOVXhuN3ZxWFhTbDNYTUtGNzRpRFJqR1psN3FrOGU&id=2e93ee0163f45e43&itag=22&source=webdrive&requiressl=yes&mh=rv&mm=32&mn=sn-ab5l6nrk&ms=su&mv=m&mvi=2&pl=20&ttl=transient&susc=dr&driveid=1NJpkfMOuC2CCtVKNr4A5XsEfTRqtpkoX&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=185.039&lmt=1674252241175348&mt=1674252305&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgMN7RDyTHKP2kn3sZluKCrqHF1uibz7lQXLAm59nqlXwCIQDYLgrl8yiAH8NM9YCcd3RhLDlWlKFQra2-p8mONv73AQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgF6RpBXhUnxw6tXq4Afq1fbB03f6m7IeAFc2cxP4rXMwCICzF2YZ5qJcznr_zW0IFGjKXF01xu9bxxVfwibVmQ8fL&cpn=xXuavzNgOah18k4l&c=WEB_EMBEDDED_PLAYER&cver=1.20230111.01.00"
        type="video/mp4"
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      ></video>
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
