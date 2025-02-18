import { Proposal } from "./ProposalTypes";
export interface ProposalState {
    proposals: Proposal[];
    clients: any[];
    selectedClient: any | null;
    clientForm: {
        genderType: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    };
    isFormValid: boolean;
    step: string;
}
type Action = {
    type: "SET_PROPOSALS";
    payload: Proposal[];
} | {
    type: "SET_CLIENTS";
    payload: any[];
} | {
    type: "SET_SELECTED_CLIENT";
    payload: any;
} | {
    type: "UPDATE_CLIENT_FORM";
    field: string;
    value: string;
} | {
    type: "SET_VALID_FORM";
    payload: boolean;
} | {
    type: "SET_STEP";
    payload: string;
};
declare const initialState: ProposalState;
declare const proposalReducer: (state: ProposalState, action: Action) => ProposalState;
export { initialState, proposalReducer };
