import React from 'react';
import { PoiProps } from './Map';
interface PoiPanelProps {
    image?: string;
    poi: PoiProps;
}
declare const PoiPanel: ({ poi }: PoiPanelProps) => React.JSX.Element;
export default PoiPanel;
