import React from 'react';
import { HotelPanelProps } from '../../interfaces/interfaces';
export type MapProps = {
    apiKey: string;
    center: CoordinateProps;
    zoom?: number;
    options?: {};
    poiList?: PoiProps[];
    hotel: HotelPanelProps;
    mapId?: string;
    onHotelLinkClick?: () => void;
    onWebsiteLinkClick?: () => void;
};
export interface PoiProps {
    description: string;
    distance: {
        unit: string;
        value: string;
    };
    latitude: number;
    longitude: number;
    mode: string;
    order_value: number;
    poi: {
        airport_code?: any;
        name: string;
        type: number;
    };
    time: {
        hours: number;
        minutes: number;
    };
    type: string;
}
type CoordinateProps = {
    lat: number;
    lng: number;
};
declare const Map: ({ apiKey, options, center, poiList, zoom, hotel, mapId, onHotelLinkClick, onWebsiteLinkClick, }: MapProps) => React.JSX.Element | "Error loading maps" | "Loading Maps";
export default Map;
