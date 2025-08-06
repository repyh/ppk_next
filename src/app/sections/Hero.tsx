'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Dummy data for the hero carousel, similar to the screenshot
const featuredUMKM = [
	{
		name: 'Risol Bu Jenny',
		description: 'Camilan Gurih yang Selalu Bikin Kangen!',
		image: 'https://asset.kompas.com/crops/2CSQSvAyi0WMr7hwcVfbA5TOLtA=/205x17:858x453/1200x800/data/photo/2021/07/13/60ed5b53cf277.jpg',
		features: [
			'Kulit risol tipis & renyah',
			'Diproses secara higienis & tanpa bahan pengawet',
			'Siap goreng atau siap saji',
		],
	},
	{
		name: 'Kopi Kelapa Dua',
		description: 'Seduhan Kopi Pilihan dari Biji Terbaik.',
		image: 'https://awsimages.detik.net.id/community/media/visual/2022/06/26/cafe-di-makassar-yang-mengusung-konsep-taman_169.jpeg?w=1200',
		features: [
			'100% Biji Kopi Arabika Asli',
			'Disangrai dengan teknik modern',
			'Tersedia dalam bentuk biji atau bubuk',
		],
	},
	{
		name: 'Kerajinan Rotan Ibu Siti',
		description: 'Anyaman Tangan Penuh Cinta dan Kualitas.',
		image: 'https://bobobox.com/blog/wp-content/uploads/2024/09/kerajinan-dari-bambu-4-jpeg.webp',
		features: [
			'Bahan rotan alami kualitas ekspor',
			'Desain unik dan modern',
			'Cocok untuk dekorasi rumah & hadiah',
		],
	},
];

export default function Hero() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % featuredUMKM.length);
		}, 5000); // Change slide every 5 seconds
		return () => clearInterval(interval);
	}, []);

	const currentItem = featuredUMKM[index];

	return (
		<section
			id="beranda"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
		>
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#F0F4F8] via-white to-[#E6EBEB]"></div>

			{/* Decorative Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute -top-4 -right-4 w-72 h-72 bg-[#84A9AC]/20 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
				<motion.div
					className="absolute -bottom-8 -left-8 w-96 h-96 bg-[#34596F]/10 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						rotate: [360, 180, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Column: Text Content */}
					<motion.div
						className="text-center lg:text-left"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						{/* Badge */}
						<motion.div
							className="inline-flex items-center px-4 py-2 rounded-full bg-[#E6EBEB] text-[#34596F] font-semibold text-sm mb-6"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.2 }}
						>
							🌟 Platform UMKM Terpercaya di Kelapa Dua
						</motion.div>

						{/* Main Heading */}
						<motion.h1
							className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 jakarta leading-tight"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							Temukan{' '}
							<span className="bg-gradient-to-r from-[#34596F] to-[#84A9AC] bg-clip-text text-transparent">
								UMKM Terbaik
							</span>
							<br />
							di Kelapa Dua
						</motion.h1>

						{/* Subtitle */}
						<motion.p
							className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							Jelajahi berbagai usaha mikro, kecil, dan menengah terpilih di
							Kelapa Dua. Dukung ekonomi lokal dengan menemukan produk dan
							layanan berkualitas.
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<motion.button
								className="bg-gradient-to-r from-[#34596F] to-[#84A9AC] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#204051] hover:to-[#34596F] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => {
									const umkmSection = document.querySelector('#umkm');
									if (umkmSection) {
										umkmSection.scrollIntoView({ behavior: 'smooth' });
									}
								}}
							>
								Jelajahi UMKM
							</motion.button>

							<motion.button
								className="bg-white text-[#34596F] px-8 py-4 rounded-xl font-semibold text-lg border-2 border-[#E6EBEB] hover:border-[#84A9AC] hover:bg-[#F0F4F8] transition-all duration-300 w-full sm:w-auto"
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								Tentang Kami
							</motion.button>
						</motion.div>
					</motion.div>

					{/* Right Column: Carousel */}
					<motion.div
						className="relative h-[500px] w-full max-w-lg mx-auto"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<AnimatePresence mode="wait">
							<motion.div
								key={index}
								className="absolute inset-0 w-full h-full bg-[#204051] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 1.05 }}
								transition={{
									duration: 0.6,
									ease: [0.4, 0, 0.2, 1],
									scale: { duration: 0.4 },
								}}
							>
								<div className="relative h-1/2">
									<img
										src={currentItem.image}
										alt={currentItem.name}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#204051] to-transparent"></div>
								</div>
								<motion.div
									className="p-8 text-white flex-grow flex flex-col"
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.2, duration: 0.5 }}
								>
									<motion.h3
										className="text-3xl font-bold jakarta mb-2"
										initial={{ y: 10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.3, duration: 0.4 }}
									>
										{currentItem.name}
									</motion.h3>
									<motion.p
										className="text-lg text-white/80 mb-4"
										initial={{ y: 10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.4, duration: 0.4 }}
									>
										{currentItem.description}
									</motion.p>
									<motion.ul
										className="space-y-2 text-white/90"
										initial={{ y: 10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.5, duration: 0.4 }}
									>
										{currentItem.features.map((feature, i) => (
											<motion.li
												key={i}
												className="flex items-start"
												initial={{ x: -10, opacity: 0 }}
												animate={{ x: 0, opacity: 1 }}
												transition={{
													delay: 0.6 + i * 0.1,
													duration: 0.3,
												}}
											>
												<span className="text-emerald-300 mr-3 mt-1">✨</span>
												<span>{feature}</span>
											</motion.li>
										))}
									</motion.ul>
								</motion.div>
							</motion.div>
						</AnimatePresence>

						{/* Pagination Dots */}
						<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
							{featuredUMKM.map((_, i) => (
								<button
									key={i}
									onClick={() => setIndex(i)}
									className={`w-3 h-3 rounded-full transition-colors ${
										i === index
											? 'bg-[#34596F]'
											: 'bg-gray-300 hover:bg-gray-400'
									}`}
								/>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
