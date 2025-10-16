import React, { createContext, useContext, useMemo, useState } from "react";

type QueryContextType = {
  query: string;
  setQuery: (q: string) => void;

  response: string;
  setResponse: (r: string) => void;

  fileNames: string[];
  addFileName: (name: string) => void;
  removeFileName: (name: string) => void;
  setFileNamesList: (names: string[]) => void;
  clearFileNames: () => void;

  clearAll: () => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const QueryContext = createContext<QueryContextType | undefined>(undefined);

export const QueryProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const addFileName = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setFileNames(prev =>
      prev.includes(trimmed) ? prev : [...prev, trimmed]
    );
  };

  const setFileNamesList = (names: string[]) => {
    setFileNames(names);
  };
  const removeFileName = (name: string) => {
    setFileNames(prev => prev.filter(f => f !== name));
  };

  const clearFileNames = () => setFileNames([]);

  const clearAll = () => {
    setQuery("");
    setResponse("");
    setFileNames([]);
    setLoading(false);
  };

  const value = useMemo<QueryContextType>(
    () => ({
      query,
      setQuery,
      response,
      setResponse,
      fileNames,
      setFileNamesList,
      addFileName,
      removeFileName,
      clearFileNames,
      clearAll,
      loading,
      setLoading,
    }),
    [query, response, fileNames, loading]
  );

  return <QueryContext.Provider value={value}>{children}</QueryContext.Provider>;
};

export const useQuery = () => {
  const ctx = useContext(QueryContext);
  if (!ctx) {
    throw new Error("useQuery must be used within a QueryProvider");
  }
  return ctx;
};
