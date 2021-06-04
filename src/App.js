import * as React from "react";
import { useState } from "react";
import ReactMapGL, { GeolocateControl, NavigationControl, Marker} from "react-map-gl";

const geolocateControlStyle = {
  right: 10,
  top: 100,
};

const navControlStyle = {
  right: 10,
  
};

function App() {
  const [viewport, setViewport] = useState({
    width: "80vw",
    height: "50vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 19,
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/mapbox/satellite-v9"}
      {...viewport}
      mapboxApiAccessToken={
        "pk.eyJ1IjoiaGFydW5hLW9zZW5pIiwiYSI6ImNrcGhwbjZwZzEzdW0ydnAzZGg4dWhrdHcifQ.3evCFZs81httHiiPmIga6A"
      }
      pitch={15}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <NavigationControl style={navControlStyle}  />
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        showAccuracyCircle={false}
        auto
      />
    </ReactMapGL>
  );
}

export default App;
