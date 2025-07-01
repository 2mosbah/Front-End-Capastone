// components/Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Little Lemon Logo" className="h-10 w-auto" />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-800 hover:text-yellow-600 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-yellow-600 transition"
            >
              About
            </Link>
            <Link
              to="/menu"
              className="text-gray-800 hover:text-yellow-600 transition"
            >
              Menu
            </Link>
            <Link
              to="/reservations"
              className="text-gray-800 hover:text-yellow-600 transition"
            >
              Reservations
            </Link>
            <Link
              to="/order"
              className="text-gray-800 hover:text-yellow-600 transition"
            >
              Order Online
            </Link>
            <Link
              to="/login"
              className="text-gray-800 hover:text-yellow-600 transition"
            >
              Login
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
          <Link
            to="/"
            className="block text-gray-800 hover:text-yellow-600 transition hover:bg-gray-100 p-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-800 hover:text-yellow-600 transition hover:bg-gray-100 p-2 rounded"
          >
            About
          </Link>
          <Link
            to="/menu"
            className="block text-gray-800 hover:text-yellow-600 transition hover:bg-gray-100 p-2 rounded"
          >
            Menu
          </Link>
          <Link
            to="/reservations"
            className="block text-gray-800 hover:text-yellow-600 transition  hover:bg-gray-100 p-2 rounded"
          >
            Reservations
          </Link>
          <Link
            to="/order"
            className="block text-gray-800 hover:text-yellow-600 transition  hover:bg-gray-100 p-2 rounded"
          >
            Order Online
          </Link>
          <Link
            to="/login"
            className="block text-gray-800 hover:text-yellow-600 transition  hover:bg-gray-100 p-2 rounded"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
