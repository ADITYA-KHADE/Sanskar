import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'About Us', 'Blog',
    'Privacy Policy', 'Terms & Conditions', 'Shop Agarbathi, Dhoop, Cones', 'Contact Us'
  ];

  return (
    <footer className="bg-rose-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link}>
                <a href="#" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>



        {/* Call to Action */}
        
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-rose-500">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          
          {/* Social Media Links */}
          <div className="flex gap-6 mb-4 sm:mb-0">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-rose-200 transition">
                <Icon size={28} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-center sm:text-left">
            © 2025, <span className="font-semibold">Sanskar</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
