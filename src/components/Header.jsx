// components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-5 mb-3 text-white bg-pink-500">
      <h1 className="text-xl font-bold">MyStore</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Shop</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
};

export default Header;