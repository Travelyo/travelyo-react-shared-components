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
    const response = await fetch(`${baseUrl}${window.apiV6Config.path}/b2b/proposals?muid=${getMuid()}&locale=${window.dataGlobalSettings?.locale || 'en'}`);
    const data = await response.json();
    dispatch({ type: "SET_PROPOSALS", payload: data });
  }

  const fetchClients = async () => {
    const response = await fetch(`${baseUrl}${window.apiV6Config.path}/b2b/clients?muid=${getMuid()}&locale=${window.dataGlobalSettings?.locale || 'en'}`);
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
