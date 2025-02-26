import Link from "next/link";
import DarkModeToggler from "./shared/dark-mode-toggler";
import { Square } from "lucide-react";

const Navbar = () => {
  return (
    <div className="dark:bg-background fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 border-b bg-white">
      <div className="mx-auto flex items-center justify-between px-4 py-2 md:max-w-[1400px] md:px-6 md:py-3 xl:px-0">
        <Link href="#hero" className="relative">
          <h1 className="text-3xl font-light">Polarize </h1>
          <Square
            size={6}
            className="absolute -right-2 bottom-[7px] rotate-45 fill-purple-500 text-purple-500 dark:fill-purple-700 dark:text-purple-700"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="#features"
            className="transition-colors hover:text-purple-500"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-purple-500"
          >
            Contact
          </Link>
          <DarkModeToggler />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
