import React, { useEffect, useRef, useState } from 'react'
import { GoogleMap, useLoadScript, Polyline, LoadScriptProps } from '@react-google-maps/api'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Marker from './Marker'
import './Map.scss';
import HotelMarker from './Markers/HotelMarker';
import PoiPanel from './PoiPanel';
import HotelPanel from './HotelPanel';
import { HotelPanelProps } from '../../interfaces/interfaces';
import mapConfig from './mapConfig';

export type MapProps = {
  apiKey: string,
  center: CoordinateProps,
  zoom?: number,
  options?: {},
  poiList?: PoiProps[],
  hotel: HotelPanelProps,
  mapId?: string,
  onHotelLinkClick?: () => void,
  onWebsiteLinkClick?: () => void,
}

export interface PoiProps {
  description: string,
  distance: {
    unit: string,
    value: string,
  },
  latitude: number,
  longitude: number,
  photo?: string,
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
  hotel,
  mapId,
  onHotelLinkClick,
  onWebsiteLinkClick,
}: MapProps) => {
  const mapOptions = {
    ...mapConfig,
    ...options,
    mapId,
  }
  const panelsRef = useRef<HTMLDivElement>(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: googleApiLibraries,
  });
  const [hoveredPoi, setHoveredPoi] = useState<PoiProps | null>(null);
  const [activePoi, setActivePoi] = useState<PoiProps | null>(null);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  const onHoverPoi = (poi: PoiProps | null) => {
    setHoveredPoi(poi);

    if (activePoi) {
      if (hoveredPoi?.latitude !== activePoi.latitude && hoveredPoi?.longitude !== activePoi.longitude) {
        setActivePoi(null);
      }
    }
  }
  
  const onOutsideClick = () => {
    setActivePoi(null);
    setHoveredPoi(null);
  }

  return (
    <div className="tsc-map-wrapper">
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={center}
        options={mapOptions}
        onClick={onOutsideClick}
      >
        <HotelMarker position={center} />
        {poiList && poiList.map((poi: any, index: number) => (
          <Marker
            key={index}
            poi={poi}
            hotelPosition={center}
            onHover={onHoverPoi}
            onClick={setActivePoi}
            active={activePoi?.latitude === poi.latitude && activePoi?.longitude === poi.longitude}
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

        {activePoi && (
          <Polyline
            path={[center, { lat: activePoi.latitude, lng: activePoi.longitude }]}
            options={{
              strokeColor: '#363F49',
              strokeOpacity: 1,
              strokeWeight: 3,
            }}
            visible={activePoi !== null}
          />
        )}
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={activePoi ? 'poi' : 'hotel'}
            nodeRef={panelsRef}
            classNames="fade"
            timeout={150}
          >
            <div ref={panelsRef}>
              {activePoi ?
                <PoiPanel poi={activePoi} />
                : <HotelPanel
                    hotel={hotel}
                    onHotelLinkClick={onHotelLinkClick}
                    onWebsiteLinkClick={onWebsiteLinkClick}
                  />
              }
            </div>
          </CSSTransition>
        </SwitchTransition>
      </GoogleMap>
    </div>
  )
}

export default Map
