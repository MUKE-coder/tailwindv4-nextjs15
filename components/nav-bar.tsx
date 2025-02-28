"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Forms", href: "/forms" },
    { name: "Packages", href: "/packages" },
    { name: "Changes", href: "/changes" },
    { name: "Summary Guide", href: "/summary" },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and desktop navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">
                TW
                <span
                  className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}
                >
                  v4
                </span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium 
                      ${
                        darkMode
                          ? "hover:bg-gray-700 hover:text-white"
                          : "hover:bg-gray-100 hover:text-gray-900"
                      } 
                      transition-colors duration-200`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark mode toggle */}
            <ModeToggle />

            {/* Example button - could be login/signup */}
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium 
                ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                } 
                transition-colors duration-200`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md
                ${
                  darkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                } 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            darkMode ? "bg-gray-800" : "bg-gray-50"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium 
                ${
                  darkMode
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-900 hover:bg-gray-200"
                } 
                transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            className={`w-full mt-4 px-4 py-2 rounded-md text-sm font-medium 
              ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              } 
              transition-colors duration-200`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
