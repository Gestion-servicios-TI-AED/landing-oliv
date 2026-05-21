import { useState, useEffect } from "react";
import clsx from "clsx";
import logo from "@/assets/e70c42e76d8f373f7319be198453a0d6dc47133e.webp";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans",
        scrolled ? "bg-[#1a7d7a]/95 backdrop-blur-md py-4 shadow-lg" : "bg-[#125755] py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-center md:justify-between items-center">
        <div className="z-50">
          <img src={logo} alt="OLIV Cartagena" className="h-10 md:h-12 w-auto" />
        </div>

      </div>
    </nav>
  );
};
