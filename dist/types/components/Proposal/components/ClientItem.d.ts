import React from 'react';
import { Proposal } from '../ProposalTypes';
type Props = {
    client: Proposal['client'];
    onClick: () => void;
    selected?: boolean;
};
declare const ClientItem: ({ client, onClick, selected, }: Props) => React.JSX.Element;
export default ClientItem;
