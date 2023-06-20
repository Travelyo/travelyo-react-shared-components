import React from 'react';
interface MarkerProps {
    position: {
        lat: number;
        lng: number;
    };
    onHover?: (position: {
        lat: number;
        lng: number;
    } | null) => void;
}
declare const Marker: ({ position, onHover, }: MarkerProps) => React.JSX.Element;
export default Marker;
