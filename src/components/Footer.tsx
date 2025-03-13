import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Instagram, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logoo3.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter')
        .insert([{ email }]);

      if (error) throw error;
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-[#15171a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Link to="/" className="flex items-center space-x-4 mb-6">
              <img
                src={logo}
                alt="Stush Logo"
                className="w-14 h-14 object-contain rounded-full bg-white p-1.5  transition-colors"
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-[#F15A24] to-[#ff7e47] bg-clip-text text-transparent">
                Stush
              </span>
            </Link>
            <p className="text-lg text-gray-400 max-w-md">
              Reimagining stories, one twist at a time. Join us in creating a new
              narrative for creative expression.
            </p>
            <div className="flex space-x-6 mt-8">
              <a 
                href="https://x.com/official_stush" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <FontAwesomeIcon icon={faXTwitter} style={{ width: '24px', height: '24px' }} />
              </a>
              <a 
                href="https://instagram.com/official.stush" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="mailto:official.stush@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Send us an email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[#F15A24] to-[#ff7e47] bg-clip-text text-transparent">
              Join Our Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-6 py-4 bg-white/5 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:bg-white/10 transition-all placeholder:text-gray-500"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-gradient-to-r from-[#F15A24] to-[#ff7e47] text-white px-6 py-4 rounded-lg hover:from-[#ff7e47] hover:to-[#F15A24] transition-all duration-300 disabled:opacity-50 font-medium shadow-lg hover:shadow-xl"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe to Updates'}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-green-400 mt-2">Successfully subscribed!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
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
