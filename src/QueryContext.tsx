import React, { createContext, useContext, useMemo, useState } from "react";

type QueryContextType = {
  query: string;
  setQuery: (q: string) => void;

  response: string;
  setResponse: (r: string) => void;

  filenames: string[];
  addFilename: (name: string) => void;
  removeFilename: (name: string) => void;
  clearFilenames: () => void;

  clearAll: () => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const QueryContext = createContext<QueryContextType | undefined>(undefined);

export const QueryProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [filenames, setFilenames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const addFilename = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setFilenames(prev =>
      prev.includes(trimmed) ? prev : [...prev, trimmed]
    );
  };

  const removeFilename = (name: string) => {
    setFilenames(prev => prev.filter(f => f !== name));
  };

  const clearFilenames = () => setFilenames([]);

  const clearAll = () => {
    setQuery("");
    setResponse("");
    setFilenames([]);
    setLoading(false);
  };

  const value = useMemo<QueryContextType>(
    () => ({
      query,
      setQuery,
      response,
      setResponse,
      filenames,
      addFilename,
      removeFilename,
      clearFilenames,
      clearAll,
      loading,
      setLoading,
    }),
    [query, response, filenames, loading]
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
