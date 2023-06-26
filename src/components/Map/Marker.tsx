import React, { useState } from 'react';
import { Circle, Marker as GoogleMarker, OverlayView, OverlayViewF } from '@react-google-maps/api';
import SVG from 'react-inlinesvg';

interface MarkerProps {
  type: string,
  hotelPosition: google.maps.LatLngLiteral,
  position: {
    lat: number,
    lng: number,
  },
  onHover?: (
    position: {
      lat: number,
      lng: number,
    } | null) => void,
  onClick?: Function,
}

const Marker = ({
  position,
  hotelPosition,
  type,
  onHover = () => {},
  onClick = () => {},
}: MarkerProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const iconUrl = `https://d16tr0byigrcd.cloudfront.net/hf-dev/images/hfmap/map-${type}.svg`;

  const onMarkerHover = () => {
    onHover(position)
    setIsHovering(true)
  }

  const onMarkerHoverOut = () => {
    onHover(null)
    setIsHovering(false)
  }

  const onMarkerClick = (event) => {
    onClick(position)
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
          className={`overlay-view-marker ${type === 'hotel' && 'marker-hotel'}`}
          onClick={onMarkerClick}
        >
          {type === 'hotel' && (
            <Circle
              center={position}
              radius={500}
              options={{
                fillColor: '#000',
                fillOpacity: 0.15,
                strokeOpacity: 0,
              }}
            />
          )}
          <SVG src={iconUrl} className="tsc-map-pin-icon" />
        </div>
      </OverlayViewF>

      <OverlayViewF {...overlayViewProps}>
        {isHovering && (
          <div>
            <div className="tsc-map-label">
              OverlayView label
            </div>
            <OverlayViewF position={getMidPoint(hotelPosition, position)} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
              <div className="tsc-map-tooltip">
                <span>9 minutes</span>
              </div>
            </OverlayViewF>
          </div>
        )}
      </OverlayViewF>
     
    </GoogleMarker>
  )
}

export default Marker;
