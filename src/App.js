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
    width: "vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 18,
  });

  return (
    <ReactMapGL className="reactMap"
      mapStyle={"mapbox://styles/mapbox/satellite-v9"}
      {...viewport}
      mapboxApiAccessToken={
        "pk.eyJ1IjoiaGFydW5hLW9zZW5pIiwiYSI6ImNrcGhwbjZwZzEzdW0ydnAzZGg4dWhrdHcifQ.3evCFZs81httHiiPmIga6A"
      }
      pitch={14}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <NavigationControl style={navControlStyle}  />
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={false}
        showAccuracyCircle={false}
        fitBoundsOptions={{maxZoom: 40}}
      />
    </ReactMapGL>
  );
}

export default App;