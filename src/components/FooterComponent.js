import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

export default function FooterComponent() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    footer.classList.add("opacity-0", "translate-y-8");
    setTimeout(() => {
      footer.classList.remove("opacity-0", "translate-y-8");
      footer.classList.add("opacity-100", "translate-y-0");
    }, 100);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#333333] rounded-t-[16px] shadow-sm border-t border-gray-300 max-w-8xl mx-auto mt-16 px-8 py-12 flex flex-col md:flex-row items-center md:items-start gap-8 transition-all duration-700 ease-out opacity-0 translate-y-8"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Logo or image */}
      <div className="flex-shrink-0 flex justify-center items-center w-40 h-56 bg-gray-300 rounded-lg border border-gray-400 overflow-hidden">
        <img
          src={logo}
          alt="Little Lemon Logo"
          className="object-contain w-full h-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "data:image/svg+xml;utf8,<svg width='120' height='224' xmlns='http://www.w3.org/2000/svg'><rect width='120' height='224' fill='%239CA3AF'/><line x1='0' y1='0' x2='120' y2='224' stroke='%236B7280'/><line x1='120' y1='0' x2='0' y2='224' stroke='%236B7280'/></svg>";
          }}
        />
      </div>
      {/* Navigation and Info */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
        {/* Doormat Navigation */}
        <div>
          <h4 className="font-extrabold text-lg text-[#F4CE14] mb-3 tracking-wide">
            Doormat Navigation
          </h4>
          <ul className="space-y-2 text-base">
            <li>
              <Link
                to="/"
                className="text-gray-100 hover:text-[#F4CE14] font-medium transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <HashLink
                to="/#about"
                className="text-gray-100 hover:text-[#F4CE14] font-medium transition-colors"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#menu"
                className="text-gray-100 hover:text-[#F4CE14] font-medium transition-colors"
              >
                Menu
              </HashLink>
            </li>
            <li>
              <Link
                to="/reservations"
                className="text-gray-100 hover:text-[#F4CE14] font-medium transition-colors"
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="text-gray-100 hover:text-[#F4CE14] font-medium transition-colors"
              >
                Order Online
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-gray-100 hover:text-[#F4CE14] font-medium transition-colors"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 className="font-extrabold text-lg text-[#F4CE14] mb-3 tracking-wide">
            Contact
          </h4>
          <ul className="space-y-2 text-base">
            <li>
              <a
                href="https://maps.google.com/?q=123+Main+St,+Chicago,+IL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-[#F4CE14] underline transition-colors"
              >
                123 Main St, Chicago, IL
              </a>
            </li>
            <li>
              <a
                href="tel:+1234567890"
                className="text-gray-100 hover:text-[#F4CE14] underline transition-colors"
              >
                +1 (234) 567-890
              </a>
            </li>
            <li>
              <a
                href="mailto:info@littlelemon.com"
                className="text-gray-100 hover:text-[#F4CE14] underline transition-colors"
              >
                info@littlelemon.com
              </a>
            </li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div>
          <h4 className="font-extrabold text-lg text-[#F4CE14] mb-3 tracking-wide">
            Social Media Links
          </h4>
          <ul className="space-y-2 text-base">
            <li>
              <a
                href="https://instagram.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-[#F4CE14] font-medium flex items-center gap-2 transition-colors"
              >
                <span aria-label="Instagram" role="img">
                  <FaInstagram />
                </span>
                @littlelemon
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-[#F4CE14] font-medium flex items-center gap-2 transition-colors"
              >
                <span aria-label="Facebook" role="img">
                  <FaFacebookF />
                </span>
                /littlelemon
              </a>
            </li>
            <li>
              <a
                href="https://x.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-[#F4CE14] font-medium flex items-center gap-2 transition-colors"
              >
                <span aria-label="X" role="img">
                  <FaX />
                </span>
                @littlelemon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
