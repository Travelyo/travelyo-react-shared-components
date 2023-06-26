import React, { useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Polyline, LoadScriptProps } from '@react-google-maps/api'
import Marker from './Marker'
import Panel from './Panel'
import './Map.scss';
import HotelMarker from './Markers/HotelMarker';
import PoiPanel from './PoiPanel';
import HotelPanel from './HotelPanel';

export type MapProps = {
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
  },
  "position": {
    "lat": 47.4901,
    "lng": 19.0629,
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
  width: '100%',
  height: 'calc(100vh - 60px)',
};

const googleApiLibraries: LoadScriptProps['libraries'] = ['places', 'geometry'];

const Map = ({
  options,
  center,
  poiList,
  zoom,
}: MapProps) => {
  const mapOptions = {
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    clickableIcons: false,
    scrollwheel: false,
    styles: [
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }],
      },
    ],
    ...options,
  }
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDfeB3SUVFKDL7kdwyEvM8pAqDrhtSRR-c',
    libraries: googleApiLibraries,
  });
  const [hoveredMarker, setHoveredMarker] = useState<CoordinateProps | null>(null);
  const [activeMarker, setActiveMarker] = useState<CoordinateProps | null>(null);

  useEffect(() => {
    console.log(activeMarker)
  }, [activeMarker])
  
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div style={{
      position: 'relative',
      height: 'calc(100vh - 60px)',
      width: 'calc(100vw - 60px)',
      borderRadius: '20px',
      overflow: 'hidden',
    }}>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={center}
        options={mapOptions}
        onClick={() => setActiveMarker(null)}
      >
        <HotelMarker position={center} />
        {poiList && poiList.map((poi: any, index: number) => (
          <Marker
            key={index}
            position={poi.position}
            hotelPosition={center}
            onHover={setHoveredMarker}
            onClick={setActiveMarker}
            type={poi.type}
          />
        ))}
        {hoveredMarker && (
          <Polyline
            path={[center, hoveredMarker]}
            options={{
              strokeColor: '#363F49',
              strokeOpacity: 1,
              strokeWeight: 3,
            }}
            visible={hoveredMarker !== null}
          />
        )}
        {activeMarker && <PoiPanel />}
        <HotelPanel />
      </GoogleMap>

      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 1,
      }}>Close</div>
    </div>
  )
}

export default Map
