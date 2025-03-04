import React from 'react';
type Props = {
    form: any;
    onChangeForm: (action: any) => void;
    errors: any;
};
declare const AddClient: ({ form, onChangeForm, errors: serverErrors, }: Props) => React.JSX.Element;
export default AddClient;
