import { SOCIAL_LINKS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-screen bg-gray-900 py-4 text-red-50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-8 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; <strong className="font-semibold text-red-400">Light</strong>{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-red-400 transition-colors duration-500 ease-in-out hover:opacity-75"
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-center text-sm md:text-right">
            Created by <span className="text-red-400 font-semibold">Light</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
