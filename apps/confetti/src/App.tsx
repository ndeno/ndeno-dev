import "./App.css";

const NDENO_DOMAIN = import.meta.env.NDENO_DOMAIN || "";

function getAllCookies() {
  var cookies = document.cookie.split(";"); // Split cookies by semicolon
  var cookieMap = new Map<string, string>();

  // Iterate through cookies
  cookies.forEach(function (cookie) {
    var parts = cookie.split("=");
    var name = parts[0].trim();
    var value = parts.slice(1).join("=").trim();

    cookieMap.set(name, decodeURIComponent(value));
  });

  return cookieMap;
}

const getSessionCookie = () => getAllCookies().get("ndeno-session");

async function handleClick() {
  const sessionCookie = getSessionCookie();

  if (!sessionCookie) {
    console.log("issue with cookie");
    return;
  }

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionCookie}`,
  };

  const options = {
    method: "GET", // HTTP method (GET, POST, PUT, DELETE, etc.)
    headers: headers, // Custom headers
  };

  try {
    await fetch(`https://api.${NDENO_DOMAIN}/hello`, options);
  } catch (e) {
    console.log(e);
  }
}

function App() {
  return (
    <main>
      <div>connect to backend </div>
      <button onClick={handleClick}>click here</button>
    </main>
  );
}

export default App;
