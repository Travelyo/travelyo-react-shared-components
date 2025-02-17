import React from 'react';
import { Proposal } from '../ProposalTypes';
type Props = {
    data: Proposal;
};
declare const ProposalListItem: ({ data, }: Props) => React.JSX.Element;
export default ProposalListItem;
