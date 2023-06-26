import React, { useState } from 'react';
import { Circle, Marker as GoogleMarker, OverlayView, OverlayViewF } from '@react-google-maps/api';
import SVG from 'react-inlinesvg';

interface HotelMarkerProps {
  position: {
    lat: number,
    lng: number,
  },
  onHover?: (
    position: {
      lat: number,
      lng: number,
    } | null) => void,
}

const HotelMarker = ({
  position,
  onHover = () => {},
}: HotelMarkerProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const iconUrl = `https://d16tr0byigrcd.cloudfront.net/hf-dev/images/hfmap/map-hotel.svg`;

  const onMarkerHover = () => {
    onHover(position)
    setIsHovering(true)
  }

  const onMarkerHoverOut = () => {
    onHover(null)
    setIsHovering(false)
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
        scaledSize: new window.google.maps.Size(40, 48)
      }}
      visible={false}
    >
      <OverlayViewF {...overlayViewProps}>
        <div 
          onMouseOver={onMarkerHover}
          onMouseOut={onMarkerHoverOut}
          className="overlay-view-marker marker-hotel"
        >
          <Circle
            center={position}
            radius={500}
            options={{
              fillColor: '#000',
              fillOpacity: 0.15,
              strokeOpacity: 0,
            }}
          />
          <SVG src={iconUrl} className="tsc-map-pin-icon" />
        </div>
      </OverlayViewF>
    </GoogleMarker>
  )
}

export default HotelMarker;
