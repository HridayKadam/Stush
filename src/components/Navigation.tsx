import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X as XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logoo3.png';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScK7tjBDj34y3K1auMfM1ftt1ZdpnoaDNqGI8_-jiN0h4yECQ/viewform?usp=dialog";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-4 relative group"
          >
            <motion.img
              src={logo}
              alt="Stush Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full bg-white/50 p-1 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.span 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F15A24] to-[#ff7e47] bg-clip-text text-transparent group-hover:drop-shadow-md transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stush
            </motion.span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-base font-medium text-gray-700 hover:text-[#F15A24] transition-colors"
            >
              Home
            </Link>
            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#F15A24] to-[#ff7e47] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us!
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-[#F15A24] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#F15A24] hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium text-[#F15A24] hover:bg-orange-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Join Us!
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
