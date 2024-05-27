import auth from "./Auth";
import "./App.css";
import { AuthProvider } from "ndeno-auth";
import { Box, Button, Input, Label, ThemeProvider } from "ndeno-ui";

const REDIRECT_DOMAIN = process.env.NDENO_DOMAIN || "";

const redirect = () => () => {
  window.location.href = `https://${REDIRECT_DOMAIN}`;
};

function App() {
  return (
    <AuthProvider
      onAuthSuccess={redirect}
      onAuthError={() => console.log("error")}
      // TODO add skeleton suspense
    >
      <ThemeProvider theme="dark">
        <Login />
      </ThemeProvider>
    </AuthProvider>
  );
}

function Login() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    auth({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <h2>{REDIRECT_DOMAIN} login</h2>
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" autoComplete="chrome-off" />
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" />
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Box>
    </form>
  );
}

export default App;
