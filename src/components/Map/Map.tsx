import React, { useState } from 'react'
import { GoogleMap, useGoogleMap, useLoadScript, Polyline, LoadScriptProps } from '@react-google-maps/api'
import Marker from './Marker'

type MapProps = {
  center: CoordinateProps,
  zoom?: number,
  options?: {}
  poiList?: []
}

type CoordinateProps = {
  lat: number,
  lng: number
}

const poi =  {
  "order_value": 4,
  "poi": {
    "name": "Hungarian National Museum",
    "type": 3,
    "airport_code": null,
    "position": {
      "lat": 47.4901,
      "lng": 19.0629,
    }
  },
  "type": "walk",
  "mode": "time",
  "time": {
    "hours": 0,
    "minutes": 4
  },
  "distance": {
    "unit": "m",
    "value": "300"
  }
}

const mapContainerStyle = {
  width: '100vw',
  height: 'calc(100vh - 200px)',
};

const googleApiLibraries: LoadScriptProps['libraries'] = ['places', 'geometry'];

const Map = ({
  options = {
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
  },
  center,
  poiList,
  zoom,
}: MapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDfeB3SUVFKDL7kdwyEvM8pAqDrhtSRR-c',
    libraries: googleApiLibraries,
  });
  const [hoveredMarker, setHoveredMarker] = useState<CoordinateProps | null>(null);
  
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={zoom}
      center={center}
      options={options}
    >
      <Marker position={center} />
      {poiList && poiList.map((poi: any, index: number) => (
        <Marker
          key={index}
          position={poi.poi.position}
          onHover={setHoveredMarker}
        />
      ))}
    </GoogleMap>
  )
}

export default Map
