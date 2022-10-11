import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="relative flex items-center justify-between">
        <NavLink
          to="/"
          aria-label="Rakib Quiz"
          title="Rakib Quiz"
          className="inline-flex items-center"
        >
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 296 296"
            width="34"
            height="34"
          >
            <defs>
              <image
                width="264"
                height="160"
                id="img1"
                href="data:image/png;base64,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"
              />
            </defs>
            <style></style>
            <use href="#img1" x="16" y="74" />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Rakib Quiz
          </span>
        </NavLink>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/topics"
              aria-label="Topics"
              title="Topics"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide text-cyan-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }
            >
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              aria-label="Statistics"
              title="Statistics"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide text-cyan-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }
            >
              <p> Statistics</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              aria-label="Blog"
              title="Blog"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide text-cyan-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <NavLink
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 296 296"
                        width="34"
                        height="34"
                      >
                        <defs>
                          <image
                            width="264"
                            height="160"
                            id="img1"
                            href="data:image/png;base64,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"
                          />
                        </defs>
                        <style></style>
                        <use href="#img1" x="16" y="74" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Rakib Quiz
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/topics"
                        aria-label="Topics"
                        title="Topics"
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium tracking-wide text-cyan-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        }
                      >
                        Topics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/statistics"
                        aria-label="Statistics"
                        title="Statistics"
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium tracking-wide text-cyan-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        }
                      >
                        <p> Statistics</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        aria-label="Blog"
                        title="Blog"
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium tracking-wide text-cyan-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
