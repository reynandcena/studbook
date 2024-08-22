"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  // Define the callback function for scroll event
  const handleScroll = () => {
    setHeader(window.scrollY > 50);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg w-full sticky top-0 z-30 transition-all "
          : "py-6 dark:bg-card"
      }  w-full sticky top-0 z-30 transition-all bg-white 
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navigation
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all cursor-pointer"
            />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
