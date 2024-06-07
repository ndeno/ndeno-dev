import auth from "./Auth";
import "./App.css";
import { AuthProvider } from "ndeno-auth";
import { Box, Button, Input, Label, ThemeProvider, Heading } from "ndeno-ui";

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
      <ThemeProvider theme="light">
        <main className="app-container">
          <div className="login-container">
            <Heading variant="primary">{REDIRECT_DOMAIN}</Heading>
            <Heading variant="secondary">Good to see you.</Heading>
            <Login />
          </div>
        </main>
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
    <Box variant="primary">
      <form onSubmit={handleSubmit}>
        <p>Login for more shenanigans</p>
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" autoComplete="chrome-off" />
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" />
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </form>
    </Box>
  );
}

export default App;
