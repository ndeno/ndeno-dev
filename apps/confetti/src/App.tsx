import "./App.css";
import { ThemeProvider, Button } from "ndeno-ui";

function App() {
  return (
    <div>
      <ThemeProvider theme="light">
        <Button variant="primary">Foo</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
