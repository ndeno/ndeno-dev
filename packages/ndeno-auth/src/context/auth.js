import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
const AuthContext = React.createContext({
    isSignedIn: false,
});
const useAuth = () => React.useContext(AuthContext);
const AuthProvider = ({ children }) => {
    const [isSignedIn, _setIsSignedIn] = React.useState(false);
    return (_jsx(AuthContext.Provider, { value: { isSignedIn }, children: children }));
};
export { AuthProvider, useAuth };
