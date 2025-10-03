import { useState, useContext } from "react";
import {AppContext} from '../context/contextsCreation';
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import useLogOut from "../authentication/useLogOut";
import { useAuth } from "../authentication/useAuth";
import GhqLogo from "./GhqLogo";
import { IoVolumeMute } from "react-icons/io5";
import { IoVolumeHighSharp } from "react-icons/io5";

const menuItems = [
  {
    name: "Pages",
    path: null,
    dropdown: [
      { name: "Welcome", path: "/" },
      { name: "My list", path: "/favorites-page" },
      { name: "Recommended", path: "/recommendations-page" },
      { name: "Trending", path: "/trending-page" },

    ],
  },
  {
    name: 'Search',
    path: '/home-page'
  },
  {
    name: "Profile",
    path: "/profile-page",
  },
  {
    name: "Contact",
    path: "/contact",
    dropdown: [
      { name: "Support", path: "/contact/support" },
      // { name: "Sales", path: "/contact/sales" },
    ],
  },
  {
    name: "Log out",
  },
  {
    name: "Log in",
  },
  {
    name: 'Sound off'
  },
  {
    name: 'Sound on'
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { user } = useAuth();
  const logOut = useLogOut();
  const { sound, setSound } = useContext(AppContext);

  return (
    <nav className=" bg-gray-900 text-cyan-400 shadow-md relative rounded-2xl z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
        <NavLink to="/" className="mr-5" onClick={() => setIsOpen(false)}>
          <GhqLogo
            style={{ borderRadius: "50%" }}
            className="px-4 py-4"
            textClass="font-bold"
            textStyle={{ textShadow: "2px 2px 6px cyan" }}
          />
        </NavLink>
        {/* Brand */}
        <div
          className="text-2xl font-bold text-cyan-400"
          style={{ textShadow: "2px 2px 6px cyan" }}>
          Game Quest Hub
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 ml-auto">
          {menuItems.map((item, idx) => {
            // Handle auth-specific items
            if (item.name === "Log out") {
              if (!user) return null; // hide logout if not logged in
              return (
                <button key={idx} onClick={logOut} className="cursor-pointer">
                  {/* Log out */}
                  {item.name}
                </button>
              );
            }

            if (item.name === "Log in") {
              if (user) return null; // hide login if logged in
              return (
                <NavLink key={idx} to="log-in-page">
                  {/* Log in */}
                  {item.name}
                </NavLink>
              );
            }

            if (item.name === 'Sound off') {
              if (!sound) return null; // hide sound off
              return (
                <button key={idx} type="button" onClick={() => setSound(false)}>
                  <IoVolumeHighSharp />
                </button>
                // >{item.name}</button>
              );
            }

            if (item.name === 'Sound on') {
              if (sound) return null; // hide sound on
              return (
                <button 
                key={idx}
                type='button'
                onClick={() => setSound(true)}
                ><IoVolumeMute /></button>
                // >{item.name}</button>
              )
            }

            // Regular menu items with  dropdown items
            if (item.dropdown) {
              return (
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
              );
            }

            // ✅ Item with NO dropdown (simple NavLink)
            return (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-cyan-400 transition ${
                    isActive ? "text-cyan-400 font-semibold" : ""
                  }`
                }>
                {item.name}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 hover:text-cyan-400 ml-auto cursor-pointer"
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
            {menuItems.map((item, idx) => {
              if (item.name === "Log out") {
                if (!user) return null; // hide logout if not logged in
                return (
                  <NavLink
                    to="/log-in-page"
                    key={idx}
                    onClick={() => {
                      logOut();
                      setIsOpen(false);
                    }}
                    className="cursor-pointer">
                    {/* Log out */}
                    {item.name}
                  </NavLink>
                );
              }

              if (item.name === "Log in") {
                if (user) return null; // hide login if logged in
                return (
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    key={idx}
                    to="log-in-page">
                    {/* Log in */}
                    {item.name}
                  </NavLink>
                );
              }

              if (item.dropdown) {
                return (
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
                              onClick={() => {setIsOpen(false);
                                setOpenDropdown(null);
                              }}
                              className="block py-1 hover:text-cyan-400">
                              {sub.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={idx}
                  to={item.path}
                  onClick={() => {setIsOpen(false);
                    setOpenDropdown(null);
                  }}
                  className={({ isActive }) =>
                    `hover:text-cyan-400 transition ${
                      isActive ? "text-cyan-400 font-semibold" : ""
                    }`
                  }>
                  {item.name}
                </NavLink>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
