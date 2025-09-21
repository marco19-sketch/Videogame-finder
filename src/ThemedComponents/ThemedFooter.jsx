import GhqLogo from "./GhqLogo";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">Game Quest Hub</h2>
          <p className="mt-3 text-sm text-gray-400">
            Built with ❤️ using React + Tailwind.
          </p>
          <NavLink to="/">
            {" "}
            <GhqLogo
              className="mt-4 md:mt-16"
              style={{ borderRadius: "50%" }}
              textClass=" text-1xl text-center"
            />
          </NavLink>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <img width="80" src="src/assets/images/GhqLogo.jpg" />
          <a href="#" className="hover:text-cyan-400">
            Home
          </a>
          <a href="#" className="hover:text-cyan-400">
            Features
          </a>
          <a href="#" className="hover:text-cyan-400">
            Pricing
          </a>
          <a href="#" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" aria-label="Twitter" className="hover:text-cyan-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-cyan-400">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Game Quest Hub. All rights reserved.
      </div>
    </footer>
  );
}
