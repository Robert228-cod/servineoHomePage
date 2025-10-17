"use client";

import { Circle } from "react-leaflet";

interface MapCircleProps {
  center: [number, number];
}

export default function MapCircle({ center }: MapCircleProps) {
  return <Circle center={center} radius={1000} />;
}
