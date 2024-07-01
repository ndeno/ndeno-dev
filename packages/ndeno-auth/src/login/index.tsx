import auth from "./auth";
import { Box, Button, Input, Label } from "ndeno-ui";

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

export default Login;
