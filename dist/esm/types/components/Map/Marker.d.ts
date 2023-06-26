/// <reference types="google.maps" />
import React from 'react';
interface MarkerProps {
    type: string;
    hotelPosition: google.maps.LatLngLiteral;
    position: {
        lat: number;
        lng: number;
    };
    onHover?: (position: {
        lat: number;
        lng: number;
    } | null) => void;
    onClick?: Function;
}
declare const Marker: ({ position, hotelPosition, type, onHover, onClick, }: MarkerProps) => React.JSX.Element;
export default Marker;
