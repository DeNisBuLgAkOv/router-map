import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { useSelector } from 'react-redux';
import { Routing } from './Routing.jsx';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';
export const INIT_COORDINATES: [number, number] = [55.755985, 37.617656];
export const STYLE_POLYLINE = {
  color: '#006bff',
  weight: 4,
};

export interface DataType {
  key: string;
  id: number;
  coordinateFromLat?: string;
  coordinateFromInt?: string;
  coordinateToLat?: string;
  coordinateToInt?: string;
  nameOrder: string;
}

const MapRoute: React.FC = () => {
    const idSelected = useSelector((state:any) => state.mapRoute.mapRoutes.idSelected);
    const list = useSelector((state:any) => state.mapRoute.mapRoutes.list);
    const [startCordinates, setStartCoordinates] = useState<[number, number] | null>(null);
    const [endCordinates, setEndCoordinates] = useState<[number, number] | null>(null);

    useEffect(() => {
      const newRoute = list.find((record: DataType) => record.id === idSelected);
      if (newRoute) {
        setStartCoordinates([Number(newRoute.coordinateFromLat), Number(newRoute.coordinateFromInt)]);
        setEndCoordinates([Number(newRoute.coordinateToLat), Number(newRoute.coordinateToInt)])
      }
      // eslint-disable-next-line
    }, [idSelected]);

    return (
      <MapContainer center={INIT_COORDINATES} zoom={10}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            startCordinates && endCordinates && (
              <>
                <Marker position={startCordinates}>
                  <Popup>{'Погрузка'}</Popup>
                </Marker>
                <Marker position={endCordinates}> 
                  <Popup>{'Разгрузка'}</Popup>
                </Marker>
                <Routing
                  start={startCordinates}
                  stop={endCordinates}
                  polyline={STYLE_POLYLINE}
                />
              </>
            )
          }
        </MapContainer>
    );
  };
  
  export default MapRoute;