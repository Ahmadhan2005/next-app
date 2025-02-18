// components/Navbar.tsx
'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Gunakan ikon dari lucide-react

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          MyWebsite
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-200">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-500 text-white space-y-4 py-4 text-center">
          <li>
            <Link href="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/services" className="block py-2" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
