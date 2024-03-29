import React from "react";

type AuthContext = {
  isSignedIn: boolean;
};

const AuthContext = React.createContext<AuthContext>({
  isSignedIn: false,
});
const useAuth = () => React.useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSignedIn, _setIsSignedIn] = React.useState(false);

  return (
    <AuthContext.Provider value={{ isSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
