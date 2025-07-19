import React, { createContext, useContext, useState } from 'react';

interface SessionContextType {
  isAuthenticated: boolean;
  sessionId: string | null;
  loading: boolean;
  setSession: (sessionId: string) => void;
  setLoading: (value: boolean) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const setSession = (id: string) => {
    setSessionId(id);
  };

  return (
    <SessionContext.Provider
      value={{
        isAuthenticated: !!sessionId,
        sessionId,
        loading,
        setSession,
        setLoading,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) throw new Error('useSession must be used within a SessionProvider');
  return context;
};
