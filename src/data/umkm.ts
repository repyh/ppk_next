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
	gallery?: string[];
	items?: {
		name: string;
		description: string;
		price: string;
	}[];
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
		status: 'Buka' as const,
		social_media: {
			whatsapp: 'https://wa.me/6281234567890',
			instagram: 'https://instagram.com/gudegbusari',
		},
		gallery: [
			'/images/gudeg.jpg',
			'/images/gudeg-2.jpg',
			'/images/gudeg-3.jpg',
			'/images/gudeg-4.jpg',
		],
		items: [
			{
				name: 'Nasi Gudeg Komplit',
				description: 'Nasi, gudeg, krecek, telur, ayam suwir, dan tahu.',
				price: 'Rp 25.000',
			},
			{
				name: 'Nasi Gudeg Telur',
				description: 'Nasi, gudeg, krecek, dan telur pindang.',
				price: 'Rp 18.000',
			},
			{
				name: 'Nasi Gudeg Ayam',
				description: 'Nasi, gudeg, krecek, dan ayam opor.',
				price: 'Rp 22.000',
			},
			{
				name: 'Es Teh Manis',
				description: 'Minuman teh manis dingin menyegarkan.',
				price: 'Rp 5.000',
			},
		],
	},
	{
		id: 2,
		name: 'Toko Batik Nusantara',
		category: 'Fashion',
		description:
			'Menjual berbagai macam batik berkualitas dari berbagai daerah di Indonesia. Koleksi lengkap untuk pria dan wanita dengan harga terjangkau.',
		image: 'https://www.batiqa.com/upload/news/l/hari-batik-nasional_7bczz.jpg',
		rating: 5,
		location: 'Jl. Raya Kelapa Dua No. 28',
		contact: '082345678901',
		price_range: 'Rp 75.000 - 300.000',
		status: 'Buka' as const,
		social_media: {
			whatsapp: 'https://wa.me/6282345678901',
			instagram: 'https://instagram.com/batiknusantara_kd',
		},
		gallery: [],
		items: [],
	},
	{
		id: 3,
		name: 'Kerajinan Bambu Kreatif',
		category: 'Kerajinan',
		description:
			'Spesialis kerajinan bambu dengan desain modern dan tradisional. Produk ramah lingkungan untuk dekorasi rumah dan perkantoran.',
		image: 'https://bobobox.com/blog/wp-content/uploads/2024/09/kerajinan-dari-bambu-4-jpeg.webp',
		rating: 4,
		location: 'Jl. Kelapa Indah No. 7',
		contact: '083456789012',
		price_range: 'Rp 25.000 - 150.000',
		status: 'Buka' as const,
		social_media: {
			whatsapp: 'https://wa.me/6283456789012',
		},
		gallery: [],
		items: [],
	},
	{
		id: 4,
		name: 'Laundry Express 24 Jam',
		category: 'Jasa',
		description:
			'Layanan laundry profesional dengan teknologi modern. Buka 24 jam untuk kemudahan pelanggan dengan kualitas terjamin.',
		image: 'https://vinscleanindonesia.com/wp-content/uploads/2023/07/Cleanpro-express-laundry-Jogja.jpg',
		rating: 4,
		location: 'Jl. Kelapa Dua No. 45',
		contact: '084567890123',
		price_range: 'Rp 3.000 - 8.000 /kg',
		status: 'Buka' as const,
		social_media: {
			whatsapp: 'https://wa.me/6284567890123',
		},
		gallery: [],
		items: [],
	},
	{
		id: 5,
		name: 'Digital Agency KD',
		category: 'Teknologi',
		description:
			'Menyediakan layanan digital marketing, web development, dan konsultasi IT untuk UMKM. Tim berpengalaman dengan portofolio yang solid.',
		image: 'https://evergreendm.com/wp-content/uploads/2020/09/digital-marketing-agency.jpg',
		rating: 5,
		location: 'Jl. Kelapa Tech Center Lt. 2',
		contact: '085678901234',
		price_range: 'Rp 500.000 - 5.000.000',
		status: 'Buka' as const,
		social_media: {
			whatsapp: 'https://wa.me/6285678901234',
			instagram: 'https://instagram.com/digitalagencykd',
		},
		gallery: [],
		items: [],
	},
	{
		id: 6,
		name: 'Klinik Kecantikan Alami',
		category: 'Kesehatan',
		description:
			'Treatment kecantikan menggunakan bahan-bahan alami dan teknologi terkini. Konsultasi gratis dengan ahli kecantikan bersertifikat.',
		image: 'https://awsimages.detik.net.id/community/media/visual/2022/12/14/ms-glow-clinic-makassar_169.jpeg?w=620',
		rating: 4,
		location: 'Jl. Kelapa Beauty Plaza No. 12',
		contact: '086789012345',
		price_range: 'Rp 50.000 - 500.000',
		status: 'Buka' as const,
		social_media: {
			whatsapp: 'https://wa.me/6286789012345',
			instagram: 'https://instagram.com/beautyalami_kd',
		},
		gallery: [],
		items: [],
	},
];
