import React from 'react';
interface Props {
    name: string;
    address: string;
    description?: string;
    rating: number;
    googleMapsLink?: string;
    hotelWebsiteLink?: string;
}
declare const HotelPanel: ({ name, address, description, rating, googleMapsLink, hotelWebsiteLink, }: Props) => React.JSX.Element;
export default HotelPanel;
