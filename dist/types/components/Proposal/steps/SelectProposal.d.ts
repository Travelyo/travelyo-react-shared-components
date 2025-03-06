import React from 'react';
import { OfferData } from '../ProposalTypes';
type Props = {
    offerData: OfferData;
    date: string;
    source: 'list' | 'offer';
};
declare const SelectProposal: ({ offerData, source, }: Props) => React.JSX.Element;
export default SelectProposal;
