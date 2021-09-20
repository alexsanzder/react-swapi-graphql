import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactElement,
} from 'react';

interface SearchInterface {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}

interface PropsType {
  children?: ReactElement;
}

const SearchContext = createContext({} as SearchInterface);

export default function SearchProvider(props: PropsType) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const searchContext = useContext(SearchContext);
  if (!searchContext) {
    throw new Error('Missing SearchProvider');
  }
  return searchContext;
}
