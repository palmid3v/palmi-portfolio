"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["projects", "contact"];

    const handleScroll = () => {
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          if (window.scrollY >= top) {
            current = id;   
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <a
          href="/"
          className="font-semibold hover:text-white transition cursor-pointer px-2 py-1"
        >
          Palmi-D3v
        </a>

        {/* LINKS */}
        <div className="flex gap-6 text-sm text-gray-300">

          {/* PROJECTS */}
          <a
            href="#projects"
            className={`px-2 py-1 transition cursor-pointer ${
              active === "projects" ? "text-white" : "hover:text-white"
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
              window.history.replaceState(null, "", " ");
            }}
          >
            Projects
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            className={`px-2 py-1 transition cursor-pointer ${
              active === "contact" ? "text-white" : "hover:text-white"
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
              window.history.replaceState(null, "", " ");
            }}
          >
            Contact
          </a>

        </div>
      </div>
    </motion.nav>
  );
}