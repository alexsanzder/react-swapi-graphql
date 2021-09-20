import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactElement,
} from 'react';

export interface HistoryObjectInterface {
  url: string;
  name: string;
}

export interface HistoryInterface {
  history?: HistoryObjectInterface[];
  setHistory: Dispatch<SetStateAction<HistoryObjectInterface[]>>;
}

interface PropsType {
  children?: ReactElement;
}

const HistoryContext = createContext({} as HistoryInterface);

export default function HistoryProvider(props: PropsType) {
  const [history, setHistory] = useState<HistoryObjectInterface[]>([]);
  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {props.children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const historyContext = useContext(HistoryContext);
  if (!historyContext) {
    throw new Error('Missing HistoryProvider');
  }
  return historyContext;
}
