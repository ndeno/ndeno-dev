"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Theme } from "@/types";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeSelector = ({ theme }: { theme: Theme }) => {
  const router = useRouter();

  const handleSwitchTheme = () => {
    Cookies.set("x-ndeno-blog-theme", theme === "dark" ? "light" : "dark");

    router.refresh();
  };

  return (
    <div>
      <button onClick={handleSwitchTheme} aria-label="theme switcher">
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};
export default ThemeSelector;
