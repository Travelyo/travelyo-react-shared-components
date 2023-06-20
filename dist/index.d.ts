import React from 'react';

type MapProps = {
    center: CoordinateProps;
    zoom?: number;
    options?: {};
    poiList?: [];
};
type CoordinateProps = {
    lat: number;
    lng: number;
};
declare const Map: ({ options, center, poiList, zoom, }: MapProps) => React.JSX.Element | "Error loading maps" | "Loading Maps";

export { Map };
