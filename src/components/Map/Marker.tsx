import React, { MouseEvent, useMemo, useState } from 'react';
import { Marker as GoogleMarker, OverlayView, OverlayViewF } from '@react-google-maps/api';
import SVG from 'react-inlinesvg';
import { PoiProps } from './Map';
import { getDistanceLabel } from '../../services/mapService';
import { CarIcon, WalkIcon } from '../icons';

interface MarkerProps {
  hotelPosition: google.maps.LatLngLiteral,
  poi: PoiProps,
  onHover?: (
    position: {
      lat: number,
      lng: number,
    } | null) => void,
  onClick?: Function,
}

const Marker = ({
  hotelPosition,
  poi,
  onHover = () => {},
  onClick = () => {},
}: MarkerProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const {
    latitude,
    longitude,
    time,
    poi: {
      type,
      name,
    }
  } = poi;
  const position = useMemo(() => ({
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  }), [latitude, longitude])
  const iconUrl = `https://d16tr0byigrcd.cloudfront.net/hf-dev/images/hfmap/map-${type}.svg`;

  const onMarkerHover = () => {
    onHover(poi)
    setIsHovering(true)
  }

  const onMarkerHoverOut = () => {
    onHover(null)
    setIsHovering(false)
  }

  const onMarkerClick = (event: MouseEvent) => {
    onClick(poi)
    event.stopPropagation()
  }

  const getMidPoint = (position1: google.maps.LatLngLiteral, position2: google.maps.LatLngLiteral) => {
    const from = new window.google.maps.LatLng(position1.lat, position1.lng);
    const to = new window.google.maps.LatLng(position2.lat, position2.lng);
    return window.google.maps.geometry.spherical.interpolate(from, to, 0.5);
  }

  const overlayViewProps = {
    mapPaneName: OverlayView.OVERLAY_MOUSE_TARGET,
    position: position,
  }

  return (
    <GoogleMarker
      position={position}
      icon={{
        url: '',
        scaledSize: new window.google.maps.Size(26, 31)
      }}
      visible={false}
    >
      <OverlayViewF {...overlayViewProps}>
        <div 
          onMouseOver={onMarkerHover}
          onMouseOut={onMarkerHoverOut}
          className="overlay-view-marker"
          onClick={onMarkerClick}
        >
          <SVG src={iconUrl} className="tsc-map-pin-icon" />
        </div>
      </OverlayViewF>

      <OverlayViewF {...overlayViewProps}>
        {isHovering && (
          <div>
            <div className="tsc-map-label">
              {name}
            </div>
            <OverlayViewF position={getMidPoint(hotelPosition, position)} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
              <div className="tsc-map-tooltip">
                {poi.type === 'walk' ? (
                  <WalkIcon size={16} fill="#ffffff" />
                ) : (
                  <CarIcon size={16} fill="#ffffff" />
                )}
                <span>{getDistanceLabel(time)}</span>
              </div>
            </OverlayViewF>
          </div>
        )}
      </OverlayViewF>
    </GoogleMarker>
  )
}

export default Marker;
