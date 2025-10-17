"use client";

import { Circle } from "react-leaflet";

interface MapCircleProps {
  center: [number, number];
  radius?: number;
  color?: string;
}

export default function MapCircle({
  center,
  radius = 5000,
  color = "blue",
}: MapCircleProps) {
  return (
    <Circle
      center={center}
      radius={radius}
      pathOptions={{
        color,
        fillColor: color,
        fillOpacity: 0.15,
        weight: 1,
      }}
    />
  );
}
