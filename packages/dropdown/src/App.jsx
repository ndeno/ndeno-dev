import { useState } from "react";
import "./App.css";



function App() {
  const [query, setQuery] = useState("");
  return (
    <main>
      <h1>Dropdown</h1>
      <div className="dropdown-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(() => e.target.value)}
        />
      </div>
    </main>
  );
}

export default App;
