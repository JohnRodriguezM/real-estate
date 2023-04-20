import { GoogleMaps } from "react-google-maps";
export const Map = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=villavicencio&t=&z=10&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
         
          marginheight="0"
          marginwidth="0"
        />
        <a href="https://2yu.co">2yu</a>
        <br />
        <style>
          {
            ".mapouter{position:relative;text-align:right;height:100%;width:100%;}"
          }
        </style>
        <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
        <style>
          {
            ".gmap_canvas{overflow:hidden;background:none!important;height:100%;width:100%;}"
          }
        </style>
      </div>
    </div>
  );
};
