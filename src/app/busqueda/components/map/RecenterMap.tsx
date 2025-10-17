"use client";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface RecenterMapProps {
  position: [number, number];
}

export default function RecenterMap({ position }: RecenterMapProps) {
  const map = useMap();

  useEffect(() => {
    map.setView(position); // mueve el mapa directamente
  }, [position, map]);

  return null;
}
