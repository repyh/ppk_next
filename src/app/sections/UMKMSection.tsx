'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import UMKMCard from '@/components/UMKMCard';
import { umkmData } from '@/data/umkm';

const filterOptions = [
	'Semua',
	'Kuliner',
	'Fashion',
	'Kerajinan',
	'Jasa',
	'Teknologi',
	'Kesehatan',
];

const ITEMS_PER_PAGE = 6;

export default function UMKMSection() {
	const [selectedFilter, setSelectedFilter] = useState('Semua');
	const [searchTerm, setSearchTerm] = useState('');
	const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

	// Handle search input change
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchTerm(value);
	};

	const filteredUMKMData = umkmData.filter((umkm) => {
		const matchesFilter =
			selectedFilter === 'Semua' || umkm.category === selectedFilter;
		const matchesSearch =
			umkm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			umkm.description.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesFilter && matchesSearch;
	});

	const filteredUMKM = filteredUMKMData.slice(0, visibleCount);

	const loadMore = () => {
		setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
	};

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
						className="inline-block px-4 py-2 bg-[#E6EBEB] text-[#34596F] rounded-full text-sm font-semibold mb-4"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2 }}
						viewport={{ once: true }}
					>
						UMKM Pilihan
					</motion.span>

					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 jakarta">
						UMKM Terpercaya
						<span className="block bg-gradient-to-r from-[#34596F] to-[#84A9AC] bg-clip-text text-transparent">
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
								id="umkm-search"
								type="text"
								placeholder="Cari UMKM..."
								value={searchTerm}
								onChange={handleSearchChange}
								className="w-full px-4 py-3 pl-12 pr-4 bg-white border-2 border-gray-200 rounded-xl focus:border-[#84A9AC] focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
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
										? 'bg-[#34596F] text-white shadow-lg'
										: 'bg-white text-gray-600 hover:bg-[#F0F4F8] hover:text-[#34596F]'
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
						<span className="font-semibold text-[#34596F]">
							{filteredUMKM.length}
						</span>{' '}
						dari{' '}
						<span className="font-semibold text-[#34596F]">
							{filteredUMKMData.length}
						</span>{' '}
						UMKM
						{selectedFilter !== 'Semua' && (
							<span>
								{' '}
								dalam kategori{' '}
								<span className="font-semibold text-[#34596F]">
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
				{filteredUMKM.length > 0 && visibleCount < filteredUMKMData.length && (
					<motion.div
						className="text-center mt-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						viewport={{ once: true }}
					>
						<motion.button
							onClick={loadMore}
							className="bg-white text-[#34596F] px-8 py-3 rounded-xl font-semibold border-2 border-[#E6EBEB] hover:border-[#84A9AC] hover:bg-[#F0F4F8] transition-all duration-300"
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
