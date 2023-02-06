import React, { createContext, useState } from 'react';

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const DEFAULT_LNG = 4.834277;
  const DEFAULT_LAT = 45.763420;
  const DEFAULT_ZOOM = 12;
  const [center, setCenter] = useState([DEFAULT_LNG, DEFAULT_LAT]);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  return (
    <MapContext.Provider
      value={{
        center,
        setCenter,
        zoom,
        setZoom
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
