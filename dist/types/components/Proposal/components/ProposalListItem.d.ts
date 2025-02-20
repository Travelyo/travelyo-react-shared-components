import React from 'react';
import { Proposal } from '../ProposalTypes';
type Props = {
    data: Proposal;
    onClick: (id: number) => void;
    active: boolean;
};
declare const ProposalListItem: ({ data, onClick, active, }: Props) => React.JSX.Element;
export default ProposalListItem;
