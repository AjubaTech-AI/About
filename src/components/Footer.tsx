import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">

          {/* Logo and Description */}
          <div className="md:w-1/4">
            <a href="/" className="inline-block mb-4">
              <img
                src="/Logo.png"
                alt="AjubaTech Logo"
                className="h-12 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm">
              AjubaTech delivers modern AI-enabled software solutions for your business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/4">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500 transition-colors">About</a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/4">
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm space-y-2 text-gray-400">
              <div>123 Ajuba Street</div>
              <div>Auckland, New Zealand</div>
              <div>Email: <a href="mailto:support@ajubatech.com" className="hover:text-blue-500">support@ajubatech.com</a></div>
              <div>Phone: <a href="tel:+6491234567" className="hover:text-blue-500">+64 9 123 4567</a></div>
            </address>
          </div>

          {/* Social Media */}
          <div className="md:w-1/4">
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ajubatech" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-blue-600">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com/ajubatech" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-blue-400">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com/company/ajubatech" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com/ajubatech" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-500">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} AjubaTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
