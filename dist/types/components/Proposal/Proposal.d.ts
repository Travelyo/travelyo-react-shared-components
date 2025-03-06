import React from 'react';
import { OfferData } from './ProposalTypes';
type Props = {
    trigger: React.ReactElement;
    offerData: OfferData;
    source: 'list' | 'offer';
};
declare const _default: React.MemoExoticComponent<({ trigger, offerData, source, }: Props) => React.JSX.Element>;
export default _default;
