import React from 'react';
interface HotelMarkerProps {
    position: {
        lat: number;
        lng: number;
    };
    onHover?: (position: {
        lat: number;
        lng: number;
    } | null) => void;
}
declare const HotelMarker: ({ position, onHover, }: HotelMarkerProps) => React.JSX.Element;
export default HotelMarker;
