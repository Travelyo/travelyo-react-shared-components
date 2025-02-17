import React from 'react';
type Props = {
    search: string;
    setSearch: (value: string) => void;
};
declare const SearchClient: ({ search, setSearch }: Props) => React.JSX.Element;
export default SearchClient;
