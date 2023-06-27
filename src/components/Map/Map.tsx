import React, { useRef, useState } from 'react'
import { GoogleMap, useLoadScript, Polyline, LoadScriptProps } from '@react-google-maps/api'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Marker from './Marker'
import './Map.scss';
import HotelMarker from './Markers/HotelMarker';
import PoiPanel from './PoiPanel';
import HotelPanel from './HotelPanel';

export type MapProps = {
  apiKey: string,
  center: CoordinateProps,
  zoom?: number,
  options?: {}
  poiList?: PoiProps[],
}

export interface PoiProps {
  description: string,
  distance: {
    unit: string,
    value: string,
  },
  latitude: string,
  longitude: string,
  mode: string,
  order_value: number,
  poi: {
    airport_code?: any,
    name: string,
    type: number,
  },
  time: {
    hours: number,
    minutes: number,
  },
  type: string,
} 

type CoordinateProps = {
  lat: number,
  lng: number
}

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const googleApiLibraries: LoadScriptProps['libraries'] = ['places', 'geometry'];

const Map = ({
  apiKey,
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
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          { visibility: 'off' },
        ],
      },
    ],
    ...options,
  }
  const panelsRef = useRef<HTMLDivElement>(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: googleApiLibraries,
  });
  const [hoveredPoi, setHoveredPoi] = useState<PoiProps | null>(null);
  const [activePoi, setActivePoi] = useState<PoiProps | null>(null);

  const formattedPois = poiList && poiList.map((poi: PoiProps) => ({
    ...poi,
    latitude: parseFloat(poi.latitude),
    longitude: parseFloat(poi.longitude),
  }))

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div className="tsc-map-wrapper">
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={center}
        options={mapOptions}
        onClick={() => setActivePoi(null)}
      >
        <HotelMarker position={center} />
        {formattedPois && formattedPois.map((poi: any, index: number) => (
          <Marker
            key={index}
            poi={poi}
            hotelPosition={center}
            onHover={setHoveredPoi}
            onClick={setActivePoi}
          />
        ))}
        {hoveredPoi && (
          <Polyline
            path={[center, { lat: hoveredPoi.latitude, lng: hoveredPoi.longitude }]}
            options={{
              strokeColor: '#363F49',
              strokeOpacity: 1,
              strokeWeight: 3,
            }}
            visible={hoveredPoi !== null}
          />
        )}
        {/* {activePoi && <PoiPanel poi={activePoi} />}
        <HotelPanel /> */}
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={activePoi ? 'poi' : 'hotel'}
            nodeRef={panelsRef}
            classNames="fade"
            timeout={150}
          >
            <div ref={panelsRef}>
              {activePoi ? <PoiPanel poi={activePoi} /> : <HotelPanel />}
            </div>
          </CSSTransition>
        </SwitchTransition>
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
