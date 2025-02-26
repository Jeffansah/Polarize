"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkModeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <div
          onClick={() => setTheme("light")}
          className="relative size-8 cursor-pointer rounded-sm bg-purple-100/0 transition duration-50 ease-in-out hover:bg-purple-500"
        >
          <Sun
            strokeWidth={1.5}
            className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      ) : (
        <div
          onClick={() => setTheme("dark")}
          className="relative size-8 cursor-pointer rounded-sm bg-purple-100/0 transition duration-50 ease-in-out hover:bg-purple-100"
        >
          <Moon
            className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2"
            strokeWidth={1.5}
          />
        </div>
      )}
    </>
  );
};

export default DarkModeToggler;
