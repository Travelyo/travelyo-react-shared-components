import React, { SetStateAction } from 'react';
import { OfferData, ProposalClientForm } from '../ProposalTypes';
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
    offerData: OfferData;
};
declare const SelectClient: ({ form, onChangeForm, selectedClient, onSelectClient, offerData, }: Props) => React.JSX.Element;
export default SelectClient;
