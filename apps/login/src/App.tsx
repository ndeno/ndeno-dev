import auth from "./Auth";
import "./App.css";
// TODO red squiggles
import { AuthProvider } from "ndeno-auth";

const REDIRECT_DOMAIN = process.env.NDENO_DOMAIN || "";

const redirect = () => {
  window.location.href = `https://${REDIRECT_DOMAIN}`;
};

function App() {
  return (
    <AuthProvider
      onAuthSuccess={redirect}
      onAuthError={() => console.log("error")}
      // TODO add skeleton suspense
    >
      <main>
        <Login />
      </main>
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
      <h2>{REDIRECT_DOMAIN} login</h2>
      <label htmlFor="email">Email</label>
      <input
        className="Input"
        type="text"
        id="email"
        autoComplete="chrome-off"
      />
      <label htmlFor="password">Password</label>
      <input className="Input" type="password" id="password" />
      <button type="submit">Sign in</button>
    </form>
  );
}

export default App;
