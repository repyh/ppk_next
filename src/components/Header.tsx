'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Beranda', href: '#beranda' },
        { name: 'Tentang', href: '#tentang' },
        { name: 'Kontak', href: '#kontak' },
    ];

    // Handle search - redirect to UMKM section
    const handleSearchFocus = () => {
        const umkmSection = document.querySelector('#umkm');
        if (umkmSection) {
            umkmSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Focus on UMKM search input after scrolling
        setTimeout(() => {
            const umkmSearchInput = document.querySelector('#umkm-search') as HTMLInputElement;
            if (umkmSearchInput) {
                umkmSearchInput.focus();
            }
        }, 800);
    };

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
                        <div className="w-10 h-10 bg-gradient-to-br from-[#34596F] to-[#84A9AC] rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">🏪</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 jakarta">
                                Katalog UMKM
                            </h1>
                            <p className="text-xs text-gray-500">Kelapa Dua</p>
                        </div>
                    </motion.div>

                    {/* Search Bar - Desktop */}
                    <motion.div
                        className="hidden lg:flex items-center flex-1 max-w-md mx-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Cari UMKM..."
                                onFocus={handleSearchFocus}
                                className="w-full px-4 py-2 pl-10 pr-4 bg-white border-2 border-gray-200 rounded-lg focus:border-[#84A9AC] focus:outline-none transition-colors text-sm text-gray-900 placeholder-gray-500"
                                readOnly
                            />
                            <svg
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-[#34596F] font-medium transition-colors relative group"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                {item.name}
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#84A9AC] group-hover:w-full transition-all duration-300"
                                    whileHover={{ scaleX: 1 }}
                                    initial={{ scaleX: 0 }}
                                />
                            </motion.a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <motion.button
                        className="hidden md:inline-flex bg-gradient-to-r from-[#34596F] to-[#84A9AC] text-white px-6 py-2 rounded-lg font-semibold hover:from-[#204051] hover:to-[#34596F] transition-all duration-300 shadow-lg hover:shadow-xl"
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
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#34596F] hover:bg-[#F0F4F8] transition-colors"
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
                        {/* Mobile Search */}
                        <div className="px-3 pb-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Cari UMKM..."
                                    onFocus={handleSearchFocus}
                                    className="w-full px-4 py-2 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#84A9AC] focus:outline-none transition-colors text-sm text-gray-900 placeholder-gray-500"
                                    readOnly
                                />
                                <svg
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-gray-600 hover:text-[#34596F] hover:bg-[#F0F4F8] rounded-md font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-2">
                            <button className="w-full bg-gradient-to-r from-[#34596F] to-[#84A9AC] text-white px-4 py-2 rounded-lg font-semibold hover:from-[#204051] hover:to-[#34596F] transition-all duration-300">
                                Daftar UMKM
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.header>
    );
}