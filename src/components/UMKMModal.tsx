'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { UMKM } from '@/data/umkm';
import Link from 'next/link';

interface UMKMModalProps {
	isOpen: boolean;
	onClose: () => void;
	umkm: UMKM;
}

export default function UMKMModal({ isOpen, onClose, umkm }: UMKMModalProps) {
	if (!isOpen) return null;

	return (
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 z-50 overflow-y-auto"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				{/* Backdrop */}
				<motion.div
					className="fixed inset-0 bg-black/60 backdrop-blur-sm"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}
				/>

				{/* Modal Container */}
				<div className="relative min-h-screen flex items-center justify-center p-4">
					<motion.div
						className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh]"
						initial={{ scale: 0.9, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.9, opacity: 0, y: 20 }}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
					>
						{/* Header Controls */}
						<div className="absolute top-4 right-4 z-10">
							<motion.button
								onClick={onClose}
								className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition-all shadow-lg"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</motion.button>
						</div>

						{/* Content */}
						<div className="max-h-[90vh] overflow-y-auto">
							{/* Hero Image */}
							<div className="relative h-64 md:h-80 overflow-hidden">
								<img
									src={umkm.image}
									alt={umkm.name}
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
								
								{/* Status and Category */}
								<div className="absolute bottom-4 left-4 flex space-x-2">
									<span className={`px-3 py-1 rounded-full text-sm font-semibold ${
										umkm.status === 'Buka'
											? 'bg-green-100 text-green-700'
											: 'bg-red-100 text-red-700'
									}`}>
										{umkm.status}
									</span>
									<span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">
										{umkm.category}
									</span>
								</div>

								{/* Rating */}
								<div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className={`w-4 h-4 ${i < umkm.rating ? 'text-yellow-400' : 'text-gray-300'}`}
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
									<span className="text-sm font-semibold text-gray-700 ml-1">({umkm.rating})</span>
								</div>
							</div>

							{/* Content Body */}
							<div className="p-6 md:p-8">
								{/* Title */}
								<motion.h2 
									className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
								>
									{umkm.name}
								</motion.h2>

								{/* Description */}
								<motion.p 
									className="text-gray-600 text-lg leading-relaxed mb-8"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
								>
									{umkm.description}
								</motion.p>

								{/* Info Grid */}
								<motion.div 
									className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
								>
									<div className="space-y-4">
										<div className="flex items-center space-x-3">
											<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
												<svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
												</svg>
											</div>
											<div>
												<p className="text-sm text-gray-500">Lokasi</p>
												<p className="font-semibold text-gray-900">{umkm.location}</p>
											</div>
										</div>
										
										<div className="flex items-center space-x-3">
											<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
												<svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
													<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
												</svg>
											</div>
											<div>
												<p className="text-sm text-gray-500">Kontak</p>
												<p className="font-semibold text-gray-900">{umkm.contact}</p>
											</div>
										</div>
									</div>

									<div className="space-y-4">
										<div className="flex items-center space-x-3">
											<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
												<svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
													<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
													<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
												</svg>
											</div>
											<div>
												<p className="text-sm text-gray-500">Harga</p>
												<p className="font-semibold text-gray-900">{umkm.price_range}</p>
											</div>
										</div>
									</div>
								</motion.div>

								{/* Social Media & Actions */}
								<motion.div 
									className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 }}
								>
									<div className="flex items-center flex-wrap gap-3">
										{umkm.social_media.whatsapp && (
											<motion.a
												href={umkm.social_media.whatsapp}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
													<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
												</svg>
												<span>WhatsApp</span>
											</motion.a>
										)}
										{umkm.social_media.instagram && (
											<motion.a
												href={umkm.social_media.instagram}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.051-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.298 0 2.35 1.052 2.35 2.349 0 1.299-1.052 2.35-2.349 2.35zm7.718 0c-1.298 0-2.35-1.051-2.35-2.35 0-1.297 1.052-2.349 2.35-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.299-1.052 2.35-2.349 2.35z" />
												</svg>
												<span>Instagram</span>
											</motion.a>
										)}
									</div>

									<Link href={`/umkm/${umkm.id}`} passHref>
										<motion.button
											className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											Lihat Halaman
										</motion.button>
									</Link>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}