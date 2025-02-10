"use client";

import React, { useState } from "react";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-yellow-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-32 h-12">
            {/* <Image
              src="/hoovu-logo.png"
              alt="Hoovu Logo"
              fill
              className="object-contain"
              priority
            /> */}
            <h1>SANSKAR</h1>
          </div>
        </Link>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link href="/shop" className="text-gray-800 hover:text-gray-600">
            Shop Now
          </Link>
          {/* <Link href="/horoscope" className="text-gray-800 hover:text-gray-600">
            Horoscope
          </Link> */}
          <Link href="/blogs" className="text-gray-800 hover:text-gray-600">
            Festival Blogs
          </Link>
          {/* <Link href="/flowers" className="text-gray-800 hover:text-gray-600">
            Fresh Flowers Near You
          </Link> */}
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-800 hover:text-gray-600">
            <Search size={20} />
          </button>
          <button className="text-gray-800 hover:text-gray-600">
            <User size={20} />
          </button>
          <button className="relative text-gray-800 hover:text-gray-600">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              1
            </span>
          </button>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-gray-800 hover:text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible only when toggled) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-yellow-400 shadow-md z-50">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop Now
            </Link>
            <Link
              href="/horoscope"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Horoscope
            </Link>
            <Link
              href="/blogs"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Festival Blogs
            </Link>
            <Link
              href="/flowers"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Fresh Flowers Near You
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
