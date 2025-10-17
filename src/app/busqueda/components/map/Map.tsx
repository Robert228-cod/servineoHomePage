"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const defaultPosition: [number, number] = [-17.39381, -66.15693];

export default function Map() {
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setPosition([pos.coords.latitude, pos.coords.longitude]),
        () => setError("No se pudo obtener tu ubicación")
      );
    } else {
      setError("No se pudo obtener tu ubicación");
    }
  }, []);

  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <MapContainer center={position} zoom={14} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>📍 Estás aquí</Popup>
        </Marker>
      </MapContainer>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
