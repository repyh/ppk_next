export interface UMKM {
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

export const umkmData: UMKM[] = [
    {
        id: 1,
        name: 'Warung Nasi Gudeg Bu Sari',
        category: 'Kuliner',
        description:
            'Menyajikan gudeg jogja autentik dengan cita rasa tradisional yang telah turun temurun. Menggunakan bahan-bahan pilihan dan bumbu rahasia keluarga.',
        image: 'https://pondokescendol.com/wp-content/uploads/2023/02/gudeg.png',
        rating: 4,
        location: 'Jl. Kelapa Dua Raya No. 15',
        contact: '081234567890',
        price_range: 'Rp 15.000 - 25.000',
        status: 'Buka',
        social_media: {
            whatsapp: 'https://wa.me/6281234567890',
            instagram: 'https://instagram.com/gudegbusari',
        },
    },
    {
        id: 2,
        name: 'Toko Batik Nusantara',
        category: 'Fashion',
        description:
            'Menjual berbagai macam batik berkualitas dari berbagai daerah di Indonesia. Koleksi lengkap untuk pria dan wanita dengan harga terjangkau.',
        image: '/images/batik.jpg',
        rating: 5,
        location: 'Jl. Raya Kelapa Dua No. 28',
        contact: '082345678901',
        price_range: 'Rp 75.000 - 300.000',
        status: 'Buka',
        social_media: {
            whatsapp: 'https://wa.me/6282345678901',
            instagram: 'https://instagram.com/batiknusantara_kd',
        },
    },
    {
        id: 3,
        name: 'Kerajinan Bambu Kreatif',
        category: 'Kerajinan',
        description:
            'Spesialis kerajinan bambu dengan desain modern dan tradisional. Produk ramah lingkungan untuk dekorasi rumah dan perkantoran.',
        image: '/images/bambu.jpg',
        rating: 4,
        location: 'Jl. Kelapa Indah No. 7',
        contact: '083456789012',
        price_range: 'Rp 25.000 - 150.000',
        status: 'Buka',
        social_media: {
            whatsapp: 'https://wa.me/6283456789012',
        },
    },
    {
        id: 4,
        name: 'Laundry Express 24 Jam',
        category: 'Jasa',
        description:
            'Layanan laundry profesional dengan teknologi modern. Buka 24 jam untuk kemudahan pelanggan dengan kualitas terjamin.',
        image: '/images/laundry.jpg',
        rating: 4,
        location: 'Jl. Kelapa Dua No. 45',
        contact: '084567890123',
        price_range: 'Rp 3.000 - 8.000 /kg',
        status: 'Buka',
        social_media: {
            whatsapp: 'https://wa.me/6284567890123',
        },
    },
    {
        id: 5,
        name: 'Digital Agency KD',
        category: 'Teknologi',
        description:
            'Menyediakan layanan digital marketing, web development, dan konsultasi IT untuk UMKM. Tim berpengalaman dengan portofolio yang solid.',
        image: '/images/digital.jpg',
        rating: 5,
        location: 'Jl. Kelapa Tech Center Lt. 2',
        contact: '085678901234',
        price_range: 'Rp 500.000 - 5.000.000',
        status: 'Buka',
        social_media: {
            whatsapp: 'https://wa.me/6285678901234',
            instagram: 'https://instagram.com/digitalagencykd',
        },
    },
    {
        id: 6,
        name: 'Klinik Kecantikan Alami',
        category: 'Kesehatan',
        description:
            'Treatment kecantikan menggunakan bahan-bahan alami dan teknologi terkini. Konsultasi gratis dengan ahli kecantikan bersertifikat.',
        image: '/images/beauty.jpg',
        rating: 4,
        location: 'Jl. Kelapa Beauty Plaza No. 12',
        contact: '086789012345',
        price_range: 'Rp 50.000 - 500.000',
        status: 'Buka',
        social_media: {
            whatsapp: 'https://wa.me/6286789012345',
            instagram: 'https://instagram.com/beautyalami_kd',
        },
    },
];

export const filterOptions = [
    'Semua',
    'Kuliner',
    'Fashion',
    'Kerajinan',
    'Jasa',
    'Teknologi',
    'Kesehatan',
];
