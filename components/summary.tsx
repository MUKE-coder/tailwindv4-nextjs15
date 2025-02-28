"use client";
import React from "react";
import { Sun, Moon, ChevronDown, Terminal } from "lucide-react";

export default function TailwindGuide() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const codeExamples = [
    {
      title: "Install shadcn with canary CLI",
      code: "pnpm dlx shadcn@canary init",
    },
    {
      title: "Add new shadcn components",
      code: "pnpm dlx shadcn@canary add button",
    },
    {
      title: "Global CSS for plugins",
      code: '@plugin "@tailwind/forms";',
    },
    {
      title: "Global CSS for packages",
      code: '@source "uploadthing/tailwind.css";',
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-200`}
    >
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Next.js with Tailwind v4</h1>
        </header>

        <main>
          <section className="mb-12">
            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">
                Next.js Comes with Tailwind V4
              </h2>
              <p className="mb-4">
                Next.js now includes Tailwind CSS v4 out of the box, making it
                easier than ever to get started with this powerful CSS
                framework.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">Shadcn</h2>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span
                    className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${
                      darkMode ? "bg-blue-400" : "bg-blue-600"
                    }`}
                  ></span>
                  <span>Shadcn is by default using Tailwind V3</span>
                </li>
                <li className="flex items-start">
                  <span
                    className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${
                      darkMode ? "bg-blue-400" : "bg-blue-600"
                    }`}
                  ></span>
                  <span>
                    To use TV4 with shadcn, remember to use the canary CLI
                  </span>
                </li>
              </ul>

              <div
                className={`relative mb-6 ${
                  darkMode ? "bg-gray-950" : "bg-gray-200"
                } rounded-md p-4 pl-12 overflow-hidden`}
              >
                <Terminal className="absolute left-3 top-4" size={18} />
                <code
                  className={`font-mono text-sm ${
                    darkMode ? "text-green-400" : "text-green-700"
                  }`}
                >
                  pnpm dlx shadcn@canary init
                </code>
              </div>

              <div className="mb-6">
                <p className="mb-2">
                  To add new shadcn Components, stick to the canary CLI:
                </p>
                <div
                  className={`relative ${
                    darkMode ? "bg-gray-950" : "bg-gray-200"
                  } rounded-md p-4 pl-12 overflow-hidden`}
                >
                  <Terminal className="absolute left-3 top-4" size={18} />
                  <code
                    className={`font-mono text-sm ${
                      darkMode ? "text-green-400" : "text-green-700"
                    }`}
                  >
                    pnpm dlx shadcn@canary add button
                  </code>
                </div>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <h3 className="text-xl font-semibold mb-3">Dark Mode</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span
                      className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${
                        darkMode ? "bg-purple-400" : "bg-purple-600"
                      }`}
                    ></span>
                    <span>Simply follow the Shadcn Guide to implement it</span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${
                        darkMode ? "bg-purple-400" : "bg-purple-600"
                      }`}
                    ></span>
                    <span>
                      Remember always to add new components using the canary CLI
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">
                Plugins eg Typography and forms
              </h2>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <span
                    className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${
                      darkMode ? "bg-green-400" : "bg-green-600"
                    }`}
                  ></span>
                  <span>
                    Please install the plugins from their official packages
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${
                      darkMode ? "bg-green-400" : "bg-green-600"
                    }`}
                  ></span>
                  <span>
                    Include them in global.css using the @plugin directive
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${
                      darkMode ? "bg-green-400" : "bg-green-600"
                    }`}
                  ></span>
                  <span>
                    eg{" "}
                    <code className="font-mono px-1 rounded bg-opacity-50 bg-gray-500">
                      @plugin "@tailwind/forms"
                    </code>
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">
                Packages eg Uploadthing and Tailwind Select
              </h2>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <span
                    className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${
                      darkMode ? "bg-amber-400" : "bg-amber-600"
                    }`}
                  ></span>
                  <span>Install the packages</span>
                </li>
                <li className="flex items-start">
                  <span
                    className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${
                      darkMode ? "bg-amber-400" : "bg-amber-600"
                    }`}
                  ></span>
                  <span>
                    Add the package JS files in your global.css using the
                    @source directive
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">
                Removed Styles and utilities
              </h2>
              <div
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-700/50" : "bg-gray-200/50"
                } flex items-center justify-center`}
              >
                <p className="italic text-center">
                  Some styles and utilities have been removed in Tailwind v4. Be
                  sure to check the migration guide.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6">Quick Reference</h2>

              <div className="space-y-4">
                {codeExamples.map((example, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <h3 className="text-lg font-medium mb-2">
                      {example.title}
                    </h3>
                    <div
                      className={`p-3 rounded ${
                        darkMode ? "bg-gray-900" : "bg-gray-100"
                      }`}
                    >
                      <code className="font-mono text-sm">{example.code}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>Next.js with Tailwind v4 Documentation Guide</p>
        </footer>
      </div>
    </div>
  );
}
