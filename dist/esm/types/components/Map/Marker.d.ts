/// <reference types="google.maps" />
import React from 'react';
import { PoiProps } from './Map';
interface MarkerProps {
    hotelPosition: google.maps.LatLngLiteral;
    poi: PoiProps;
    onHover?: (position: {
        lat: number;
        lng: number;
    } | null) => void;
    onClick?: Function;
    active: boolean;
}
declare const Marker: ({ hotelPosition, poi, active, onHover, onClick, }: MarkerProps) => React.JSX.Element;
export default Marker;
