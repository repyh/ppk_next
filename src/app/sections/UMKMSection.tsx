'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import UMKMCard from '@/components/UMKMCard';
import { umkmData, filterOptions } from '@/items/umkm';

export default function UMKMSection() {
	const [selectedFilter, setSelectedFilter] = useState('Semua');
	const [searchTerm, setSearchTerm] = useState('');

	const filteredUMKM = umkmData.filter((umkm) => {
		const matchesFilter =
			selectedFilter === 'Semua' || umkm.category === selectedFilter;
		const matchesSearch =
			umkm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			umkm.description.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesFilter && matchesSearch;
	});

	return (
		<section id="umkm" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<motion.span
						className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2 }}
						viewport={{ once: true }}
					>
						UMKM Pilihan
					</motion.span>

					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 jakarta">
						UMKM Terpercaya
						<span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
							di Kelapa Dua
						</span>
					</h2>

					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Koleksi UMKM pilihan yang telah terbukti kualitas dan pelayanannya.
						Dukung ekonomi lokal dengan berbelanja dari para entrepreneur
						terpercaya.
					</p>
				</motion.div>

				{/* Search and Filter */}
				<motion.div
					className="mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					viewport={{ once: true }}
				>
					{/* Search Bar */}
					<div className="max-w-md mx-auto mb-8">
						<div className="relative">
							<input
								type="text"
								placeholder="Cari UMKM..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full px-4 py-3 pl-12 pr-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:outline-none transition-colors"
							/>
							<svg
								className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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

					{/* Filter Buttons */}
					<div className="flex flex-wrap justify-center gap-2">
						{filterOptions.map((filter, index) => (
							<motion.button
								key={filter}
								className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
									selectedFilter === filter
										? 'bg-emerald-500 text-white shadow-lg'
										: 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
								}`}
								onClick={() => setSelectedFilter(filter)}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.05 + 0.4 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{filter}
							</motion.button>
						))}
					</div>
				</motion.div>

				{/* Results Count */}
				<motion.div
					className="text-center mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				>
					<p className="text-gray-600">
						Menampilkan{' '}
						<span className="font-semibold text-emerald-600">
							{filteredUMKM.length}
						</span>{' '}
						UMKM
						{selectedFilter !== 'Semua' && (
							<span>
								{' '}
								dalam kategori{' '}
								<span className="font-semibold text-emerald-600">
									{selectedFilter}
								</span>
							</span>
						)}
					</p>
				</motion.div>

				{/* UMKM Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					layout
				>
					{filteredUMKM.map((umkm, index) => (
						<motion.div
							key={umkm.id}
							layout
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ delay: index * 0.1 }}
						>
							<UMKMCard {...umkm} />
						</motion.div>
					))}
				</motion.div>

				{/* No Results */}
				{filteredUMKM.length === 0 && (
					<motion.div
						className="text-center py-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<div className="text-6xl mb-4">🔍</div>
						<h3 className="text-xl font-semibold text-gray-600 mb-2">
							Tidak ada UMKM ditemukan
						</h3>
						<p className="text-gray-500">
							Coba ubah kata kunci pencarian atau filter kategori
						</p>
					</motion.div>
				)}

				{/* Load More Button */}
				{filteredUMKM.length > 0 && (
					<motion.div
						className="text-center mt-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						viewport={{ once: true }}
					>
						<motion.button
							className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Muat Lebih Banyak
						</motion.button>
					</motion.div>
				)}
			</div>
		</section>
	);
}
