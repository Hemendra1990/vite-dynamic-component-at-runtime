import { createContext, useContext, useState } from "react";

type DataContextType = {
    [key: string]: any
};

export const DataContext = createContext<DataContextType>({});

export function useDataContext() {
    return useContext(DataContext);
}

function DataContextProvider({ children }: {children: React.ReactNode}) {
    const [context, setContext] = useState<DataContextType>({"name": "Hemendra"});

    return <DataContext.Provider value={{context, setContext}}>
            {children}
        </DataContext.Provider>;
}

export default DataContextProvider;