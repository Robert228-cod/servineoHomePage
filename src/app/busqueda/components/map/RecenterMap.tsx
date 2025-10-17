"use client";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface RecenterMapProps {
  position: [number, number];
}

export default function RecenterMap({ position }: RecenterMapProps) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, map.getZoom(), { animate: true, duration: 0.8 });
  }, [position, map]);

  return null;
}
