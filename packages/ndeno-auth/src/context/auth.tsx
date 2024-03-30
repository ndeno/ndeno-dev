import React from "react";
import { CognitoJwtVerifier } from "aws-jwt-verify";

type AuthContext = {
  isSignedIn: boolean;
};

// TODO export auth funcionality from this package
// including utils, hooks etc etc
const USER_POOL_ID = process.env.NDENO_DEV_USER_POOL_ID || "";
const CLIENT_ID = process.env.NDENO_DEV_PUBLIC_CLIENT_1_ID || "";

function getCookieValue(name: string) {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return null;
}

const verifyWebToken = async () => {
  const verifier = CognitoJwtVerifier.create({
    userPoolId: USER_POOL_ID,
    tokenUse: "access",
    clientId: CLIENT_ID,
  });

  const token = getCookieValue("ndeno-session");

  if (!token) {
    return false;
  }

  try {
    const payload = await verifier.verify(token);
    console.log("Token is valid. Payload:", payload);
  } catch {
    console.log("Token not valid!");
    return false;
  }

  return true;
};

const AuthContext = React.createContext<AuthContext>({
  isSignedIn: false,
});
const useAuth = () => React.useContext(AuthContext);

type Props = {
  children: React.ReactNode;
  onAuthSuccess: (onFulfilled: any) => void;
  onAuthError?: (onFulfilled: any) => void;
};

const AuthProvider = ({ children, onAuthSuccess, onAuthError }: Props) => {
  const [isSignedIn, _setIsSignedIn] = React.useState(false);

  React.useEffect(() => {
    verifyWebToken().then(onAuthSuccess, onAuthError);
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
