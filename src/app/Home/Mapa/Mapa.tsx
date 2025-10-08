'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Importación dinámica para evitar errores de SSR
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

// Plaza 14 de Septiembre, Cochabamba
const PLAZA_14_SEPTIEMBRE = {
  lat: -17.3926,
  lng: -66.1568,
};

// Configurar iconos personalizados
const createCustomIcon = (L: typeof import('leaflet'), color: string = '#3388ff') => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 30px;
        height: 30px;
        border-radius: 50% 50% 50% 0;
        border: 3px solid white;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      ">
        <div style="
          color: white;
          font-size: 16px;
          font-weight: bold;
          transform: rotate(45deg);
          margin-top: -2px;
        ">📍</div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
};

export default function Mapa() {
  const [position, setPosition] = useState<{ lat: number; lng: number }>(PLAZA_14_SEPTIEMBRE);
  const [userPosition, setUserPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [L, setL] = useState<typeof import('leaflet') | null>(null);

  // Cargar Leaflet dinámicamente
  useEffect(() => {
    import('leaflet').then((leaflet) => {
      setL(leaflet.default);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const userPos = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
          setUserPosition(userPos);
          setPosition(userPos);
          setIsLoading(false);
        },
        (error) => {
          console.log('Permiso denegado o error de geolocalización:', error.message);
          setError('No se pudo obtener tu ubicación. Mostrando Plaza 14 de Septiembre.');
          setPosition(PLAZA_14_SEPTIEMBRE);
          setUserPosition(null);
          setIsLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    } else {
      setError('Geolocalización no soportada por este navegador.');
      setPosition(PLAZA_14_SEPTIEMBRE);
      setIsLoading(false);
    }
  }, []);

  if (isLoading || !L) {
    return (
      <div className="w-full h-[400px] sm:h-[600px] rounded-lg overflow-hidden shadow-md flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Mensaje de estado */}
      {error && (
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 text-sm">{error}</p>
        </div>
      )}
      
      {/* Mapa interactivo */}
      <div className="w-full h-[400px] sm:h-[600px] rounded-lg overflow-hidden shadow-md border-2 border-gray-200">
        <MapContainer 
          center={position} 
          zoom={userPosition ? 15 : 13} 
          style={{ height: '100%', width: '100%' }}
          zoomControl={true}
          scrollWheelZoom={true}
          doubleClickZoom={true}
          dragging={true}
          touchZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />
          
          {/* Marcador del usuario */}
          {userPosition && (
            <Marker position={userPosition} icon={createCustomIcon(L, '#3388ff')}>
              <Popup>
                <div className="text-center">
                  <strong>¡Tu ubicación!</strong>
                  <br />
                  <small>Lat: {userPosition.lat.toFixed(6)}</small>
                  <br />
                  <small>Lng: {userPosition.lng.toFixed(6)}</small>
                </div>
              </Popup>
            </Marker>
          )}
          
          {/* Marcador de Plaza 14 de Septiembre */}
          <Marker position={PLAZA_14_SEPTIEMBRE} icon={createCustomIcon(L, '#e74c3c')}>
            <Popup>
              <div className="text-center">
                <strong>Plaza 14 de Septiembre</strong>
                <br />
                <small>Cochabamba, Bolivia</small>
                <br />
                <small>Punto de referencia central</small>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      
      {/* Información adicional */}
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Funcionalidades del Mapa:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Zoom in/out con la rueda del mouse</li>
          <li>• Arrastra para mover el mapa</li>
          <li>• Doble clic para hacer zoom</li>
          <li>• Toque y arrastra en dispositivos móviles</li>
        </ul>
      </div>
    </div>
  );
}