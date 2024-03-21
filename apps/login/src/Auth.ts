import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from "amazon-cognito-identity-js";

const USER_POOL_ID = process.env.NDENO_DEV_USER_POOL_ID;
const CLIENT_ID = process.env.NDENO_DEV_PUBLIC_CLIENT_1_ID;

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
      result.getAccessToken().getJwtToken();

      console.log("success");
    },

    onFailure: function (err) {
      alert(err.message || JSON.stringify(err));
    },
  });
}
