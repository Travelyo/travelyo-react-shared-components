import React, { ReactNode } from 'react';
import { Proposal } from './ProposalTypes';
interface ProposalContextType {
    proposals: Proposal[];
    setProposals: React.Dispatch<React.SetStateAction<Proposal[]>>;
    clients: any[];
    setClients: React.Dispatch<React.SetStateAction<any[]>>;
    step: string;
    setStep: React.Dispatch<React.SetStateAction<string>>;
}
export declare const ProposalContext: React.Context<ProposalContextType | undefined>;
export declare const ProposalProvider: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
export declare const useProposalContext: () => ProposalContextType;
export default ProposalProvider;
