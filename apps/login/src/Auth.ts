import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from "amazon-cognito-identity-js";

const USER_POOL_ID = process.env.NDENO_DEV_USER_POOL_ID;
const CLIENT_ID = process.env.NDENO_DEV_PUBLIC_CLIENT_1_ID;

const redirect = () => {
  const url = new URL(window.location.href);
  const redirectUrl = url.searchParams.get("redirect");

  window.location.href = redirectUrl ? redirectUrl : "https://www.example.com";
};

function setCookie(name: string, value: string, expirationDays: number) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);

  const cookieValue =
    encodeURIComponent(value) +
    "; expires=" +
    expirationDate.toUTCString() +
    "; path=/";

  document.cookie = name + "=" + cookieValue;
}

export default function auth({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const authenticationData = {
    Username: email,
    Password: password,
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);
  const poolData = {
    UserPoolId: USER_POOL_ID ?? "",
    ClientId: CLIENT_ID ?? "",
  };

  const userPool = new CognitoUserPool(poolData);

  const userData = {
    Username: email,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      const jwt = result.getAccessToken().getJwtToken();
      setCookie("ndeno-session", jwt, 1);
      redirect();
    },

    onFailure: function (err) {
      console.log(err.message || JSON.stringify(err));
      // TODO add error callback for render on login form
    },
  });
}
