// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-blue-700">
          Royalties Youth Church
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {[
            ["/", "Home"],
            ["/programs", "Programs"],
            ["/testimonies", "Testimonies"],
            ["/pastors", "Pastors"],
            ["/fellowships", "Fellowships"],
            ["/leaders", "Leaders"],
          ].map(([to, label]) => (
            <Link key={to} to={to} className="hover:text-blue-600 transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-14 left-0 w-full bg-white md:hidden shadow-md"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {[
                ["/", "Home"],
                ["/programs", "Programs"],
                ["/testimonies", "Testimonies"],
                ["/pastors", "Pastors"],
                ["/fellowships", "Fellowships"],
                ["/leaders", "Leaders"],
              ].map(([to, label]) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={to}
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
