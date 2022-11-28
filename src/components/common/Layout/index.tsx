import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
function Header() {
  const [mobileMenu, toggleMobileMenu] = useState(false);
  return (
    <nav className="bg-gray-100">
      <div className="py-4 px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span className="text-bold">Logo</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/">Login</Link>
            <Link className="bg-green-400 p-2 rounded text-center text-white" to="/">
              Signup
            </Link>
          </div>
          <button
            type="button"
            onClick={() => {
              toggleMobileMenu(!mobileMenu);
            }}
            className="block md:hidden"
          >
            {mobileMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${mobileMenu ? '' : 'hidden'} md:hidden`}>
          <Link className="block" to="/">
            Home
          </Link>
          <Link className="block" to="/about">
            About
          </Link>
          <Link className="block" to="/">
            Login
          </Link>
          <Link className="block bg-green-400 p-2 rounded text-center text-white" to="/">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-6xl py-2 px-4">Footer</div>
    </footer>
  );
}
export default Layout;
