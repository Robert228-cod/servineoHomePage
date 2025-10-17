"use client";

import { useMapEvents } from "react-leaflet";

export default function MapEvents() {
  useMapEvents({
    click: (e) => {
      console.log("Clic en el mapa:", e.latlng);
    },
  });

  return null;
}
