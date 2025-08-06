'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import UMKMModal from './UMKMModal';

interface UMKMCardProps {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
    rating: number;
    location: string;
    contact: string;
    price_range: string;
    status: 'Buka' | 'Tutup';
    social_media: {
        whatsapp?: string;
        instagram?: string;
    };
}

export default function UMKMCard(umkm: UMKMCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        name,
        category,
        description,
        image,
        rating,
        location,
        contact,
        price_range,
        status,
        social_media
    } = umkm;

    return (
        <>
            <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status === 'Buka'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                            }`}>
                            {status}
                        </span>
                    </div>
                    <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-[#84A9AC] text-white rounded-full text-xs font-semibold">
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#34596F] transition-colors line-clamp-1">
                            {name}
                        </h3>
                        <div className="flex items-center space-x-1 ml-2">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'
                                        }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            <span className="text-sm text-gray-500 ml-1">({rating})</span>
                        </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {description}
                    </p>

                    <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 mr-2 text-[#84A9AC]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="truncate">{location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 mr-2 text-[#84A9AC]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span>{contact}</span>
                        </div>
                        <div className="flex items-center text-sm font-semibold text-[#34596F]">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                        <span>{price_range}</span>
                    </div>
                </div>
                </div>

                {/* Social Media & Action */}
                <div className="p-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                            {social_media.whatsapp && (
                                <motion.a
                                href={social_media.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-[#84A9AC] hover:bg-[#34596F] text-white rounded-full flex items-center justify-center transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                </svg>
                            </motion.a>
                        )}
                        {social_media.instagram && (
                            <motion.a
                                href={social_media.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.415 2.175 8.796 2.163 12 2.163m0-1.623C8.724.54 8.316.53 7.053.482 3.736.336.926 3.148.78 6.465c-.048 1.262-.058 1.67-.058 4.949s.01 3.688.058 4.949c.147 3.317 2.957 6.129 6.27 6.272 1.263.048 1.67.058 4.949.058s3.688-.01 4.949-.058c3.317-.148 6.129-2.957 6.272-6.272.048-1.262.058-1.67.058-4.949s-.01-3.688-.058-4.949C23.074 3.148 20.264.336 16.947.192 15.684.144 15.276.134 12 .134zM12 6.865A5.135 5.135 0 1012 17.135 5.135 5.135 0 0012 6.865zm0 8.644A3.509 3.509 0 1112 8.5a3.509 3.509 0 010 7.009zm6.328-9.712a1.21 1.21 0 11-2.42 0 1.21 1.21 0 012.42 0z" />
                                </svg>
                            </motion.a>
                        )}
                        </div>
                        <motion.button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-gradient-to-r from-[#34596F] to-[#84A9AC] hover:from-[#204051] hover:to-[#34596F] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Lihat Detail
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Modal */}
            <UMKMModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                umkm={umkm}
            />
        </>
    );
}
