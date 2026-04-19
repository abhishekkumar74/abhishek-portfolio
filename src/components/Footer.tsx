import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart, Zap, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { personal } from '../data/personal';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 sm:py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white" size={16} />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Abhi<span className="text-orange-500">shek</span>
            </span>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
            <motion.a href={personal.social.github} target="_blank" rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-orange-500 hover:text-white text-gray-700 dark:text-gray-300 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }} title="GitHub"
            >
              <Github size={18} />
            </motion.a>
            <motion.a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-orange-500 hover:text-white text-gray-700 dark:text-gray-300 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }} title="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a href={personal.social.twitter} target="_blank" rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-orange-500 hover:text-white text-gray-700 dark:text-gray-300 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }} title="Twitter"
            >
              <Twitter size={18} />
            </motion.a>
            <motion.a href={personal.social.instagram} target="_blank" rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-orange-500 hover:text-white text-gray-700 dark:text-gray-300 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }} title="Instagram"
            >
              <Instagram size={18} />
            </motion.a>
            <motion.a href={personal.social.youtube} target="_blank" rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-orange-500 hover:text-white text-gray-700 dark:text-gray-300 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }} title="YouTube"
            >
              <Youtube size={18} />
            </motion.a>
            <motion.a href={`mailto:${personal.email}`} target="_blank" rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-orange-500 hover:text-white text-gray-700 dark:text-gray-300 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }} title="Email"
            >
              <Mail size={18} />
            </motion.a>
            <motion.a href={`tel:${personal.phone}`} target="_blank" rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-orange-500 hover:text-white text-gray-700 dark:text-gray-300 p-2 sm:p-3 rounded-lg transition-colors"
              whileHover={{ y: -2 }} title="Phone"
            >
              <Phone size={18} />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-center md:text-right text-sm sm:text-base">
            <p className="flex items-center justify-center md:justify-end gap-1">
              © 2025 Abhishek kumar. Made with 
              <Heart className="text-orange-500" size={14} />
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <motion.button
            onClick={scrollToTop}
            className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            whileHover={{ y: -2 }}
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;