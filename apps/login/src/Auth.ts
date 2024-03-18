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
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENT_ID,
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

      // //POTENTIAL: Region needs to be set if not already set previously elsewhere.
      // AWS.config.region = "<region>";

      // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      //   IdentityPoolId: "...", // your identity pool id here
      //   Logins: {
      //     // Change the key below according to the specific region your user pool is in.
      //     "cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>": result
      //       .getIdToken()
      //       .getJwtToken(),
      //   },
      // });

      //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
      // AWS.config.credentials.refresh((error) => {
      //   if (error) {
      //     console.error(error);
      //   } else {
      //     // Instantiate aws sdk service objects now that the credentials have been updated.
      //     // example: const s3 = new AWS.S3();
      //     console.log("Successfully logged!");
      //   }
      // });
    },

    onFailure: function (err) {
      alert(err.message || JSON.stringify(err));
    },
  });
}
