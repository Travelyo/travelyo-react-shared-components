import React from 'react';
import { Proposal } from '../ProposalTypes';
type Props = {
    data: Proposal;
    onClick: (id: number) => void;
};
declare const ProposalListItem: ({ data, onClick, }: Props) => React.JSX.Element;
export default ProposalListItem;
