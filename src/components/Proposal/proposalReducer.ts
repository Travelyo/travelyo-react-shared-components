import { Proposal } from "./ProposalTypes";

export interface ProposalState {
  proposals: Proposal[];
  clients: any[];
  step: string;
}

type Action =
  | { type: "SET_PROPOSALS"; payload: Proposal[] }
  | { type: "SET_CLIENTS"; payload: any[] }
  | { type: "SET_STEP"; payload: string };

const initialState: ProposalState = {
  proposals: [],
  clients: [],
  step: "selectProposal",
};

const proposalReducer = (state: ProposalState, action: Action): ProposalState => {
  switch (action.type) {
    case "SET_PROPOSALS":
      return { ...state, proposals: action.payload };
    case "SET_CLIENTS":
      return { ...state, clients: action.payload };
    case "SET_STEP":
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

export { initialState, proposalReducer };
