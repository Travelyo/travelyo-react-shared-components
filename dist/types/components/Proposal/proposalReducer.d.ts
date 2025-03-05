import { Proposal } from "./ProposalTypes";
export interface ProposalState {
    proposals: Proposal[];
    clients: any[];
    step: string;
    selectedProposal?: number | null;
}
type Action = {
    type: "SET_PROPOSALS";
    payload: Proposal[];
} | {
    type: "SET_CLIENTS";
    payload: any[];
} | {
    type: "SET_SELECTED_PROPOSAL";
    payload: number | null;
} | {
    type: "SET_STEP";
    payload: string;
};
declare const initialState: ProposalState;
declare const proposalReducer: (state: ProposalState, action: Action) => ProposalState;
export { initialState, proposalReducer };
