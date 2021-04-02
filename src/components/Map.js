import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "../util";

function Map({ countries, casesType, lat, lon, zooms }) {
  function ChangeView({ lat, lon, zoom }) {
    const center = [lat, lon];
    const map = useMap();
    map.setView(center, zoom);

    return null;
  }

  return (
    <div className="map">
      <MapContainer center={[lat, lon]} zoom={zooms} minZoom={2} maxZoom={9}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView lat={lat} lon={lon} zoom={zooms} />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;
