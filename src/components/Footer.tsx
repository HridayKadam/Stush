import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logoo3.png';

export default function Footer() {
  return (
    <footer className="bg-[#15171a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link 
              to="/" 
              className="group flex items-center space-x-4 mb-6 transition-transform hover:scale-105"
            >
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F15A24] to-[#ff7e47] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <img
                  src={logo}
                  alt="Stush Logo"
                  className="w-full h-full object-contain relative z-10 rounded-full bg-white p-2 shadow-xl"
                />
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-[#F15A24] to-[#ff7e47] bg-clip-text text-transparent drop-shadow-lg">
                Stush
              </span>
            </Link>
            <p className="text-lg text-gray-400 max-w-md mb-8">
              Reimagining stories, one twist at a time. Join us in creating a new
              narrative for creative expression.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://x.com/official_stush" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
                aria-label="Follow us on X (Twitter)"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/official.stush" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="mailto:official.stush@gmail.com" 
                className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
                aria-label="Send us an email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="text-right">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#F15A24] to-[#ff7e47] bg-clip-text text-transparent">
                Contact Us
              </h3>
              <p className="text-gray-400">official.stush@gmail.com</p>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <div className="text-right">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#F15A24] to-[#ff7e47] bg-clip-text text-transparent">
                Follow Us
              </h3>
              <p className="text-gray-400">Stay updated with our latest news</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Stush. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}