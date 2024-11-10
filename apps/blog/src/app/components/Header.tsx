import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import ThemeSelector from "./ThemeSelector";

const Header = async () => {
  const { get: getCookies } = await cookies();

  const theme =
    getCookies("x-ndeno-blog-theme")?.value === "dark" ? "dark" : "light";

  return (
    <nav className="border-b border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <ThemeSelector theme={theme} />
    </nav>
  );
};
export default Header;
