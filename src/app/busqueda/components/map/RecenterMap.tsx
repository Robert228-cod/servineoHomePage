"use client";
import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

interface RecenterMapProps {
  position: [number, number];
}

export default function RecenterMap({ position }: RecenterMapProps) {
  const map = useMap();
  const prevPosition = useRef<[number, number] | null>(null);

  useEffect(() => {
    if (
      prevPosition.current &&
      prevPosition.current[0] === position[0] &&
      prevPosition.current[1] === position[1]
    ) {
      return; // no mover si no cambió
    }

    prevPosition.current = position;
    map.flyTo(position, map.getZoom(), { animate: true, duration: 0.8 });
  }, [position, map]);

  return null;
}
