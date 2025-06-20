'use client';

import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-38.321, -12.894],
      zoom: 15
    });

    new mapboxgl.Marker()
      .setLngLat([-38.321, -12.894])
      .setPopup(new mapboxgl.Popup().setHTML('<b>MAS Produtos</b>'))
      .addTo(map.current);

    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => map.current?.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-[400px] rounded-lg overflow-hidden mb-12"
    />
  );
}