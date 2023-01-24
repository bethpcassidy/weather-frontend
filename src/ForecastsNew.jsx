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
        src="https://rr4---sn-ab5sznze.c.drive.google.com/videoplayback?expire=1674599789&ei=LSXQY593sOuHBr3VstgF&ip=24.228.119.248&cp=QVRMVkZfWFdWSlhPOmJucXZqZlVmNVNqMkh4VUxNWDV4dlE5S2hKVWJtRUxjWXlOOGowZk5TRE4&id=2e93ee0163f45e43&itag=22&source=webdrive&requiressl=yes&mh=rv&mm=32&mn=sn-ab5sznze&ms=su&mv=m&mvi=4&pl=20&ttl=transient&susc=dr&driveid=1NJpkfMOuC2CCtVKNr4A5XsEfTRqtpkoX&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=185.039&lmt=1674252241175348&mt=1674584457&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgKZoDt3CQtCuzHt44hCRHwUkOv226WvB5SaMap1V_B3cCIQDYqMsW2zaMMl0T58dbUd5aauuILmpUmq9VyOOXf3aaXA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIga_xaCJr7n9osQqXZBhZbdXlTdHB9r8zSv2qZXrpBu4MCIFtEIACxmETMCBUpI6tJ0uAIlqk5vSnsOY2dwtUJqDsK&cpn=wjRCr4Y07oywJC_j&c=WEB_EMBEDDED_PLAYER&cver=1.20230111.01.00"
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
