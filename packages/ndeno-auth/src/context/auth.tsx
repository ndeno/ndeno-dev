import React from "react";
import { CognitoJwtVerifier } from "aws-jwt-verify";

type VerifierCreate = ReturnType<(typeof CognitoJwtVerifier)["create"]>;
type VerifierPayload = Awaited<ReturnType<VerifierCreate["verify"]>>;

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
    return null;
  }

  try {
    const payload: VerifierPayload = await verifier.verify(token);
    return payload;
  } catch {
    console.log("Token not valid!");
    return null;
  }
};

const AuthContext = React.createContext<AuthContext>({
  isSignedIn: false,
});

const useAuth = () => React.useContext(AuthContext);

type Props = {
  children: React.ReactNode;
  onAuthSuccess: (onFulfilled: VerifierPayload | null) => void;
  onAuthError?: () => void;
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
