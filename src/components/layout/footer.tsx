"use client";

import { motion } from 'framer-motion';
import { FaYoutube, FaDiscord, FaBook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Footer() {

  return (
    <footer className="w-full border-t border-gray-200 py-20 mt-auto bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white/50 pointer-events-none"></div>
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="flex items-center"
            >
              <div className="text-lg font-medium tracking-tight text-gray-900 group-hover:text-gray-800 transition-colors duration-200">
                Typewriting<span className="text-[#2382fc] group-hover:text-blue-700 transition-colors duration-200">.ai</span>
              </div>
            </motion.div>
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
              Your intelligent AI assistant for building powerful conversational agents. Create smart AI assistants that ask questions, gather information, and explain about your service or product clearly.
            </p>
            <div className="h-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left md:text-right"
          >
            <h3 className="text-base font-medium mb-4 font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Tutorial",
                  href: "https://docs.typewriting.ai/docs/category/typewriting-ai-tutorial",
                  icon: <FaBook className="h-4 w-4 text-blue-500 transition-all duration-200 group-hover:scale-125" />
                },
                {
                  name: "Demos",
                  href: "https://www.youtube.com/channel/UCSLTKQLEd413fJ4kGvNWZ9g/",
                  icon: <FaYoutube className="h-4 w-4 text-red-600 transition-all duration-200 group-hover:scale-125" />
                },

              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                  whileHover={{ x: -5, scale: 1.02 }}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-[#2382fc] transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-start md:justify-end gap-2">
                      <span>{item.name}</span>
                      {item.icon}
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-left md:text-right"
          >
            <h3 className="text-base font-medium mb-4 font-semibold text-gray-900 ">Connect</h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Contact",
                  href: "mailto:typewriting.ai@gmail.com",
                  icon: <FiMail className="h-4 w-4 transition-all duration-200 group-hover:scale-125" />
                },
                {
                  name: "Discord",
                  href: "https://discord.gg/tqbH6Svz8k",
                  icon: <FaDiscord className="h-4 w-4 text-indigo-500 transition-all duration-200 group-hover:scale-125" />
                }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 + (index * 0.05) }}
                  whileHover={{ x: -5, scale: 1.02 }}
                >
                  <a
                    href={item.href}
                    target={item.name !== "Contact" ? "_blank" : undefined}
                    rel={item.name !== "Contact" ? "noopener noreferrer" : undefined}
                    className="text-sm text-gray-600 hover:text-[#2382fc] transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-start md:justify-end gap-2">
                      <span>{item.name}</span>
                      {item.icon}
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-200 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Typewriting.ai. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms and conditions"].map((item, index) => (
              <motion.a
                key={item}
                whileHover={{ y: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                href={item === "Privacy Policy" ? "https://docs.google.com/document/d/1n6s0zkL7J-v9q9WhBLePNqWO-DltNV2MjT9wEGb4yQo" : "https://docs.google.com/document/d/14BH22j5pe32UdW15S9xnrVilNpfwU5UF8U-OUX5POxI"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#2382fc] transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* Developer Credit */}
        <div className="mt-12 text-center pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Designed & Development partner {' '}
            <a 
              href="https://www.mindscraft.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-[#2382fc] transition-colors duration-200 hover:text-blue-600"
            >
              MindsCraft
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

