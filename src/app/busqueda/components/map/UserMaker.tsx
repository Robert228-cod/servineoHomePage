"use client";

import { Marker } from "react-leaflet";

interface UserMarkerProps {
  position: [number, number];
}

export default function UserMarker({ position }: UserMarkerProps) {
  return <Marker position={position} />;
}
