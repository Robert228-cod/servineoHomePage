"use client";

import { Marker, Popup } from "react-leaflet";

interface UserMarkerProps {
  position: [number, number];
}

export default function UserMarker({ position }: UserMarkerProps) {
  return (
    <Marker position={position}>
      <Popup>📍 Estás aquí</Popup>
    </Marker>
  );
}
