import { cookies } from "next/headers";
import ThemeSelector from "./ThemeSelector";

const Header = async () => {
  const { get: getCookies } = await cookies();

  const theme =
    getCookies("x-ndeno-blog-theme")?.value === "dark" ? "dark" : "light";

  return (
    <nav className="flex justify-around">
      <div>Home</div>
      <div>About</div>
      <ThemeSelector theme={theme} />
    </nav>
  );
};
export default Header;
