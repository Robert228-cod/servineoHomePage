"use client";

import { Popup, useMap } from "react-leaflet";

interface NoResultsProps {
  show: boolean;
  position: [number, number];
}

export default function NoResults({ show, position }: NoResultsProps) {
  if (!show) return null;

  return (
    <Popup position={position} autoPan closeButton={false}>
      ⚠️ No se encontraron fixers cercanos
    </Popup>
  );
}
