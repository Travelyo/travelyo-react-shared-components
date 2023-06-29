/// <reference types="react" />
export interface SvgProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    fill?: string;
}
export interface HotelPanelProps {
    name: string;
    address: string;
    description?: string;
    rating: number;
    googleMapsLink?: string;
    hotelWebsiteLink?: string;
}
