"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import { Fixer } from "@/app/busqueda/interface/Fixer_Interface";
import { distanceKm } from "@/app/busqueda/utils/distance";

import RecenterMap from "./RecenterMap";
import UserMarker from "./UserMarker";
import FixerMarker from "./FixerMarker";
import MapEvents from "./MapEvents";
import MapCircle from "./MapCircle";
import LocationButton from "./LocationButton";

interface MapProps {
  fixers: Fixer[];
}

const defaultPosition: [number, number] = [-17.39381, -66.15693];

export default function Map({ fixers }: MapProps) {
  const [position, setPosition] = useState(defaultPosition);
  const [zoom, setZoom] = useState(14);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedPos = localStorage.getItem("mapPosition");
    const savedZoom = localStorage.getItem("mapZoom");
    if (savedPos) setPosition(JSON.parse(savedPos));
    if (savedZoom) setZoom(Number(savedZoom));

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setPosition([pos.coords.latitude, pos.coords.longitude]),
        () => setError("No se pudo obtener tu ubicación")
      );
    } else setError("No se pudo obtener tu ubicación");
  }, []);

  useEffect(() => {
    localStorage.setItem("mapPosition", JSON.stringify(position));
    localStorage.setItem("mapZoom", zoom.toString());
  }, [position, zoom]);

  const nearbyFixers = fixers.filter(
    (f) => f.available && distanceKm(position, [f.lat, f.lng]) <= 5
  );

  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <MapContainer center={position} zoom={zoom} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <RecenterMap position={position} />
        <UserMarker position={position} />
        <MapCircle center={position} radius={5000} />
        {nearbyFixers.map((f) => (
          <FixerMarker key={f.id} fixer={f} />
        ))}
        <MapEvents onClick={(pos) => setPosition(pos as [number, number])} />
        {nearbyFixers.length === 0 && (
          <Popup position={position} closeButton={false} autoPan={true}>
            ⚠️ No se encontraron fixers cercanos
          </Popup>
        )}
      </MapContainer>
      <LocationButton
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (pos) => setPosition([pos.coords.latitude, pos.coords.longitude]),
              () => setError("No se pudo obtener tu ubicación")
            );
          }
        }}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
