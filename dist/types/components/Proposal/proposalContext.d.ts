import React, { ReactNode } from 'react';
import { ProposalState } from './proposalReducer';
interface ProposalContextType {
    state: ProposalState;
    dispatch: React.Dispatch<any>;
}
export declare const ProposalContext: React.Context<ProposalContextType | undefined>;
export declare const ProposalProvider: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
export declare const useProposalContext: () => ProposalContextType;
export default ProposalProvider;
