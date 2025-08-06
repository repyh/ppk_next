import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Katalog UMKM Kelapa Dua - Platform UMKM Terpercaya",
    description: "Temukan berbagai UMKM terpercaya di Kelapa Dua. Platform digital untuk mendukung ekonomi lokal dengan produk dan layanan berkualitas dari entrepreneur lokal.",
    keywords: "UMKM, Kelapa Dua, usaha mikro, ekonomi lokal, produk lokal, entrepreneur",
    authors: [{ name: "Katalog UMKM Kelapa Dua" }],
    openGraph: {
        title: "Katalog UMKM Kelapa Dua",
        description: "Platform UMKM terpercaya di Kelapa Dua",
        type: "website",
        locale: "id_ID",
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
