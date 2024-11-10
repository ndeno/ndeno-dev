"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Theme } from "@/types";

const ThemeSelector = ({ theme }: { theme: Theme }) => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          console.log("theme prop", theme);

          Cookies.set(
            "x-ndeno-blog-theme",
            theme === "dark" ? "light" : "dark"
          );

          router.refresh();
        }}
        aria-label="switch theme"
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold
         text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
         focus-visible:outline-2 focus-visible:outline-offset-2 
         focus-visible:outline-indigo-600"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};
export default ThemeSelector;
