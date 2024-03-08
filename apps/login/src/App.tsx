import auth from "./Auth";
import "./App.css";

function App() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    console.log({ email, password });

    auth({ email, password });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <button type="submit">submit</button>
      </form>
    </main>
  );
}

export default App;
