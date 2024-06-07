import "./App.css";

const NDENO_DOMAIN = import.meta.env.NDENO_DOMAIN || "";

function getAllCookies() {
  const cookies = document.cookie.split(";");
  const cookieMap = new Map<string, string>();

  cookies.forEach(function (cookie) {
    const parts = cookie.split("=");
    const name = parts[0].trim();
    const value = parts.slice(1).join("=").trim();

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
    method: "GET",
    headers: headers,
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
