import React, { createContext, ReactNode, useContext, useEffect, useReducer, useState } from 'react';
import { Proposal } from './ProposalTypes';
import { initialState, proposalReducer, ProposalState } from './proposalReducer';
import { baseUrl, getMuid } from '@/lib/utils';

interface ProposalContextType {
  state: ProposalState;
  dispatch: React.Dispatch<any>;
  fetchProposals: () => void;
  fetchClients: () => void;
}

export const ProposalContext = createContext<ProposalContextType | undefined>(undefined);

export const ProposalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(proposalReducer, initialState);

  const fetchProposals = async () => {
    const response = await fetch(`${baseUrl}/api/v-6/v6-feat-b2b/b2b/proposals?muid=${getMuid()}`);
    const data = await response.json();
    dispatch({ type: "SET_PROPOSALS", payload: data });
  }

  const fetchClients = async () => {
    const response = await fetch(`${baseUrl}/api/v-6/v6-feat-b2b/b2b/clients?muid=${getMuid()}`);
    const data = await response.json();
    dispatch({ type: "SET_CLIENTS", payload: data });
  }

  useEffect(() => {
    fetchProposals()
    fetchClients()
  }, [])

  return (
    <ProposalContext.Provider value={{ state, dispatch, fetchProposals, fetchClients }}>
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
