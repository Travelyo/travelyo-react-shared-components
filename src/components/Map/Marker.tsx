import React from 'react';
import { Marker as GoogleMarker } from '@react-google-maps/api';
import { Hotel } from '../icons';

interface MarkerProps {
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

const Marker = ({
  position,
  onHover = () => {},
}: MarkerProps) => {
  return (
    <GoogleMarker
      position={position}
      onMouseOver={() => onHover(position)}
      onMouseOut={() => onHover(null)}
      // icon={{
      //   url: 'https://e7.pngegg.com/pngimages/872/39/png-clipart-pinpoint-icon-flat-design-map-pin-icons-logos-emojis-pins.png',
      //   scaledSize: new window.google.maps.Size(50, 65),
      //   origin: new window.google.maps.Point(0, 0),
      //   anchor: new window.google.maps.Point(25, 25),
      // }}
    >
      <Hotel />
    </GoogleMarker>
  )
}

export default Marker;
