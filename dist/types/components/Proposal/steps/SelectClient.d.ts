import React, { SetStateAction } from 'react';
import { ProposalClientForm } from '../ProposalTypes';
type Props = {
    form: ProposalClientForm;
    onChangeForm: (action: SetStateAction<{
        genderType: string;
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
    }>) => void;
    selectedClient: string | null;
    onSelectClient: (value: string | null) => void;
};
declare const SelectClient: ({ form, onChangeForm, selectedClient, onSelectClient, }: Props) => React.JSX.Element;
export default SelectClient;
