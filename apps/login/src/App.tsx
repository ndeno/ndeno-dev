import "./App.css";
import { AuthProvider } from "ndeno-auth";
import { ThemeProvider, Heading } from "ndeno-ui";
import Login from "./Login";

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

export default App;
