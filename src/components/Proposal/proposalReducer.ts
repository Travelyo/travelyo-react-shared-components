import { Proposal } from "./ProposalTypes";

export interface ProposalState {
  proposals: Proposal[];
  clients: any[];
  selectedClient: any | null;
  clientForm: {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  isFormValid: boolean;
  step: string;
}

type Action =
  | { type: "SET_PROPOSALS"; payload: Proposal[] }
  | { type: "SET_CLIENTS"; payload: any[] }
  | { type: "SET_SELECTED_CLIENT"; payload: any }
  | { type: "UPDATE_CLIENT_FORM"; field: string; value: string }
  | { type: "SET_VALID_FORM"; payload: boolean }
  | { type: "SET_STEP"; payload: string };

const initialState: ProposalState = {
  proposals: [],
  clients: [],
  selectedClient: null,
  clientForm: { title: "", firstName: "", lastName: "", email: "", phone: "" },
  isFormValid: false,
  step: "selectProposal",
};

const proposalReducer = (state: ProposalState, action: Action): ProposalState => {
  switch (action.type) {
    case "SET_PROPOSALS":
      return { ...state, proposals: action.payload };
    case "SET_CLIENTS":
      return { ...state, clients: action.payload };
    case "SET_SELECTED_CLIENT":
      return { ...state, selectedClient: action.payload, isFormValid: true };
    case "UPDATE_CLIENT_FORM":
      const updatedForm = { ...state.clientForm, [action.field]: action.value };
      const isValid = Object.values(updatedForm).every((val) => val.trim() !== "");
      return { ...state, clientForm: updatedForm, isFormValid: isValid };
    case "SET_VALID_FORM":
      return { ...state, isFormValid: action.payload };
    case "SET_STEP":
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

export { initialState, proposalReducer };
