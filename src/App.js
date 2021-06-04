import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; //eslint-disable-line import/no-webpack-loader-syntax

// Note: MapBox Gl Js is a JavaScript library used for building web maps.
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFydW5hLW9zZW5pIiwiYSI6ImNrcGhwbjZwZzEzdW0ydnAzZGg4dWhrdHcifQ.3evCFZs81httHiiPmIga6A";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-95.358421);
  const [lat, setLat] = useState(29.749907);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  // a function that stores the new latitude, longitude, and
  // zoom that you get when a user interacts with the map.
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
