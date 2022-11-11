import { ReactElement, useState, createContext, useContext } from "react";

interface AppContextInterface {
  token: string | undefined;
  searchResults: any;
}
interface AppContextUpdaterInterface {
  updateToken: Function;
  updateSearchResults: Function;
}

export interface AppContextProviderProps {
  children: ReactElement;
}
const AppContext = createContext<AppContextInterface | undefined>(undefined);
const AppContextUpdater = createContext<AppContextUpdaterInterface | undefined>(
  undefined
);
export const useAppContext = () => {
  return useContext(AppContext);
};
export const useAppContextUpdater = () => {
  return useContext(AppContextUpdater);
};
export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  const [tokenValue, setTokenValue] = useState<string | undefined>(undefined);
  const [searchResultsValues, setSearchResultsValues] = useState<
    any | undefined
  >(undefined);
  return (
    <AppContext.Provider
      value={{ token: tokenValue, searchResults: searchResultsValues }}
    >
      <AppContextUpdater.Provider
        value={{
          updateToken: setTokenValue,
          updateSearchResults: setSearchResultsValues,
        }}
      >
        {children}
      </AppContextUpdater.Provider>
    </AppContext.Provider>
  );
}
