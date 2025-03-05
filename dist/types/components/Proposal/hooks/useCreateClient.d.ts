import { ProposalClientForm } from '../ProposalTypes';
export type CreateClientResponse = ProposalClientForm & {
    id: string;
};
export declare const useCreateClient: () => {
    createClient: (clientData: Record<string, any>) => Promise<any>;
    status: "error" | "idle" | "pending" | "success";
    data: CreateClientResponse | null;
    error: string | null;
};
