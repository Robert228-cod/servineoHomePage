"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const defaultPosition: [number, number] = [-17.39381, -66.15693];

export default function Map() {
  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <MapContainer center={defaultPosition} zoom={14} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={defaultPosition}>
          <Popup>📍 Posición inicial</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
