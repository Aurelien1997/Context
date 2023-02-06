import React, { useRef, useEffect, useContext } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import { MapContext } from '../context/MapContext';

const API_KEY = process.env.REACT_APP_PRIVATE_KEY;
const MIN_ZOOM = 10;
const MAX_ZOOM = 15;

export default function Map({ toggleState, setLoading }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const { center, setCenter, zoom, setZoom, mapStyle } = useContext(MapContext);

  useEffect(() => {
    if (toggleState !== 2) return;
    if (map.current) return;
    setLoading(true); 
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: center,
      zoom: zoom,
      minZoom: MIN_ZOOM,
      maxZoom: MAX_ZOOM
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    new maplibregl.Marker({color:"red"})
      .setLngLat(center)
      .addTo(map.current);
    map.current.on('load', () => {
      setLoading(false); 
      });
    map.current.on('move', () => {
      setCenter(map.current.getCenter());
      setZoom(map.current.getZoom());
    });
    }, [map, center, setCenter, zoom, setZoom, mapStyle, toggleState, setLoading]);
    
    return (
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
    );
  }
