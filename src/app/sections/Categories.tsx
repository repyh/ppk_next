'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  {
    id: 1,
    name: 'Kuliner',
    icon: '🍜',
    description: 'Makanan dan minuman tradisional hingga modern',
    count: 15,
    gradient: 'from-[#84A9AC] to-[#34596F]'
  },
  {
    id: 2,
    name: 'Fashion',
    icon: '👕',
    description: 'Pakaian, aksesoris, dan produk fashion',
    count: 8,
    gradient: 'from-[#84A9AC] to-[#34596F]'
  },
  {
    id: 3,
    name: 'Kerajinan',
    icon: '🎨',
    description: 'Produk handmade dan kerajinan tangan',
    count: 12,
    gradient: 'from-[#84A9AC] to-[#34596F]'
  },
  {
    id: 4,
    name: 'Jasa',
    icon: '🔧',
    description: 'Layanan profesional dan teknis',
    count: 6,
    gradient: 'from-[#84A9AC] to-[#34596F]'
  },
  {
    id: 5,
    name: 'Teknologi',
    icon: '💻',
    description: 'IT, digital marketing, dan teknologi',
    count: 4,
    gradient: 'from-[#84A9AC] to-[#34596F]'
  },
  {
    id: 6,
    name: 'Kesehatan',
    icon: '🏥',
    description: 'Produk kesehatan dan kecantikan',
    count: 5,
    gradient: 'from-[#84A9AC] to-[#34596F]'
  }
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section id="kategori" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-[#E6EBEB] text-[#34596F] rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kategori UMKM
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 jakarta">
            Beragam Kategori
            <span className="block bg-gradient-to-r from-[#34596F] to-[#84A9AC] bg-clip-text text-transparent">
              Usaha Lokal
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan berbagai jenis usaha mikro, kecil, dan menengah yang sesuai dengan kebutuhan Anda
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className={`group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-transparent transition-all duration-300 cursor-pointer ${
                selectedCategory === category.id ? 'border-[#84A9AC] shadow-xl' : 'hover:shadow-xl'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {category.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#34596F] transition-colors">
                {category.name}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Count Badge */}
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 bg-gradient-to-r ${category.gradient} text-white text-sm font-semibold rounded-full`}>
                  {category.count} UMKM
                </span>
                
                <motion.div
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#E6EBEB] transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#34596F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{ height: selectedCategory === category.id ? 'auto' : 0, opacity: selectedCategory === category.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-3">
                    Kategori ini mencakup berbagai jenis usaha yang telah terbukti berkualitas dan terpercaya.
                  </p>
                  <button className="text-[#34596F] font-semibold text-sm hover:text-[#204051] transition-colors">
                    Lihat Semua UMKM →
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#34596F] to-[#84A9AC] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#204051] hover:to-[#34596F] transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Jelajahi Semua Kategori
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
