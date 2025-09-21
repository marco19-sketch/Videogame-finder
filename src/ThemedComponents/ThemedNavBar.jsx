import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    name: "Pages",
    path: "",
    dropdown: [
      { name: "Landing", path: "/" },
      { name: "Home", path: "/home-page" },
      { name: 'My list', path: '/favorites-page'},
      { name: 'Parallax', path: '/parallax-page'},
      { name: 'Sign in', path: '/log-in-page'},
      { name: 'Sign up', path: '/sign-up-page'},
      { name: 'Reset pw', path: '/reset-password-page'},
      { name: 'Recommended', path: '/recommendations-page'},
      { name: 'Trending', path: '/trending-page'},
      { name: 'Results', path: '/results-page'},
      { name: 'Details', path: '/details-page'},
      { name: 'Test page', path: '/test-page'},
      
    ],
  },
  {
    name: "Features",
    path: "/features",
    dropdown: [
      { name: "Core", path: "/features/core" },
      { name: "Advanced", path: "/features/advanced" },
    ],
  },
  {
    name: "Pricing",
    path: "/pricing",
    dropdown: [
      { name: "Free", path: "/pricing/free" },
      { name: "Pro", path: "/pricing/pro" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    dropdown: [
      { name: "Support", path: "/contact/support" },
      { name: "Sales", path: "/contact/sales" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="bg-gray-900 text-gray-200 shadow-md relative z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <div className="text-2xl font-bold text-cyan-400">Game Quest Hub</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:text-cyan-400 transition ${
                    isActive ? "text-cyan-400 font-semibold" : ""
                  }`
                }>
                {item.name} <ChevronDown size={16} />
              </NavLink>

              {/* Dropdown */}
              <AnimatePresence>
                {openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    {item.dropdown.map((sub, subIdx) => (
                      <NavLink
                        key={subIdx}
                        to={sub.path}
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-cyan-400">
                        {sub.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 hover:text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 px-6 pb-4 space-y-3">
            {menuItems.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <button
                  className="flex justify-between items-center py-2 hover:text-cyan-400"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name
                    )
                  }>
                  {item.name} <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pl-4 flex flex-col space-y-1">
                      {item.dropdown.map((sub, subIdx) => (
                        <NavLink
                          key={subIdx}
                          to={sub.path}
                          className="block py-1 hover:text-cyan-400">
                          {sub.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
