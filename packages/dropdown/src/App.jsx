import { useEffect, useState } from "react";
import "./App.css";
import randomHexColorGenerator from "./utils/hex-color";

const fetchUsers = async (query) => {
  if (!query) return;

  try {
    const response = await fetch(
      `https://dummyjson.com/users/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

function App() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestion] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const suggestions = await fetchUsers(search);
      setSuggestion(() => suggestions);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  const suggestionList = suggestions?.users?.length
    ? suggestions?.users?.map((user) => user.email).slice(0, 5)
    : [];

  const hexGen = randomHexColorGenerator();

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
            <div className="dropdown-suggestions">
              {suggestionList.map((email) => (
                <div key={email}>
                  <span /> <span>{email}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
