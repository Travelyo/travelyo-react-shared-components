import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Proposal } from './ProposalTypes';

interface ProposalContextType {
  proposals: Proposal[];
  setProposals: React.Dispatch<React.SetStateAction<Proposal[]>>;
  clients: any[];
  setClients: React.Dispatch<React.SetStateAction<any[]>>;
  step: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
}

export const ProposalContext = createContext<ProposalContextType | undefined>(undefined);

export const ProposalProvider = ({ children }: { children: ReactNode }) => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [step, setStep] = useState('selectProposal');

  const fetchProposals = async () => {
    const response = await fetch('http://web.qa-b2b.svc.cluster.local/api/v-6/v6-feat-b2b/b2b/proposal?muid=e9c6690252f7be9383859f4a8ccd809j');
    const data = await response.json();
    setProposals(data);
  }

  const fetchClients = async () => {
    const response = await fetch('http://web.qa-b2b.svc.cluster.local/api/v-6/v6-feat-b2b/b2b/clients?muid=e9c6690252f7be9383859f4a8ccd809j');
    const data = await response.json();
    setClients(data);
  }

  useEffect(() => {
    fetchProposals()
    fetchClients()
  }, [])

  return (
    <ProposalContext.Provider value={{ proposals, setProposals, clients, setClients, step, setStep }}>
      {children}
    </ProposalContext.Provider>
  );
}

export const useProposalContext = () => {
  const context = useContext(ProposalContext);
  if (!context) {
    throw new Error("useProposalContext must be used within a ProposalProvider");
  }
  return context;
};

export default ProposalProvider
