import React from 'react';
type Props = {
    search: string;
    setSearch: (value: string) => void;
    selectedClient: string | null;
    onSelectClient: (value: string) => void;
};
declare const _default: React.MemoExoticComponent<({ search, setSearch, selectedClient, onSelectClient, }: Props) => React.JSX.Element>;
export default _default;
