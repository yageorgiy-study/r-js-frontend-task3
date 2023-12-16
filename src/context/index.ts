import React, {createContext, Dispatch, SetStateAction} from 'react'

type AuthContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: (v: boolean) => void;
    isLoading: boolean;
};

export const AuthContext: React.Context<AuthContextType> = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: (v: boolean): void => {},
    isLoading: false
});
