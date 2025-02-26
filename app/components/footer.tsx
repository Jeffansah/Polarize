import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full shrink-0 border-t">
      <div className="flex w-full flex-col items-center gap-2 px-4 py-6 sm:mx-auto sm:max-w-[1400px] sm:flex-row sm:px-0">
        <p className="text-xs">
          © {new Date().getFullYear()} Polarize. All rights reserved.
        </p>
        <div className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
