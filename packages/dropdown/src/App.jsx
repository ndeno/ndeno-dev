import { useEffect, useState } from "react";
import "./App.css";

const debounce = (func, time) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), time);
  };
};

function App() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handleUpdateSearch = debounce(setDebouncedSearch, 1500);

    handleUpdateSearch(() => search);
  }, [search]);

  return (
    <main>
      <h1>Dropdown</h1>
      <div className="dropdown-container">
        <div className="dropdown-input">
          <div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(() => e.target.value)}
            />
          </div>
        </div>
        {debouncedSearch}
      </div>
    </main>
  );
}

export default App;
