'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-primary-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <motion.div
                        className="col-span-1 md:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">🏪</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold jakarta">
                                    Katalog UMKM Kelapa Dua
                                </h1>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Platform terpercaya untuk menemukan dan mendukung UMKM lokal di Kelapa Dua. 
                            Bergabunglah dengan komunitas yang mendukung ekonomi kreatif dan berkelanjutan.
                        </p>
                        <div className="flex space-x-4">
                            {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current"></div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            {['Beranda', 'Kategori', 'UMKM', 'Tentang Kami', 'Kontak'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Kontak</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>Kelapa Dua, Depok</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>+62 812-3456-7890</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>info@umkmkelapadua.id</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400 text-sm">
                        © 2025 Katalog UMKM Kelapa Dua. Semua hak dilindungi.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                            Kebijakan Privasi
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                            Syarat & Ketentuan
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
