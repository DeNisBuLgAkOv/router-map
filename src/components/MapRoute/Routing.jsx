import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

export const Routing = ({ start, stop, polyline }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(...start), L.latLng(...stop)],
      lineOptions: {
        styles: [polyline],
      },  
      routeWhileDragging: false,
      useZoomParameter: true,
      pointMarkerStyle: { display: 'none' },
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, start, stop, polyline]);

  return null;
};
