'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Beranda', href: '#beranda' },
        { name: 'Kategori', href: '#kategori' },
        { name: 'UMKM', href: '#umkm' },
        { name: 'Tentang', href: '#tentang' },
        { name: 'Kontak', href: '#kontak' },
    ];

    return (
        <motion.header 
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div 
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">🏪</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 jakarta">
                                Katalog UMKM
                            </h1>
                            <p className="text-xs text-gray-500">Kelapa Dua</p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-green-600 font-medium transition-colors relative group"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                {item.name}
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"
                                    whileHover={{ scaleX: 1 }}
                                    initial={{ scaleX: 0 }}
                                />
                            </motion.a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <motion.button
                        className="hidden md:inline-flex bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Panel UMKM
                    </motion.button>

                    {/* Mobile menu button */}
                    <motion.button
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                        opacity: isOpen ? 1 : 0, 
                        height: isOpen ? 'auto' : 0 
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-2">
                            <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300">
                                Daftar UMKM
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.header>
    );
}