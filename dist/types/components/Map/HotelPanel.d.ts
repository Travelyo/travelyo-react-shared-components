import React from 'react';
import { HotelPanelProps } from '../../interfaces/interfaces';
interface Props {
    hotel: HotelPanelProps;
    onHotelLinkClick?: () => void;
    onWebsiteLinkClick?: () => void;
}
declare const HotelPanel: ({ hotel, onHotelLinkClick, onWebsiteLinkClick, }: Props) => React.JSX.Element;
export default HotelPanel;
