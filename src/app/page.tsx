'use client';

import Header from '@/components/Header';
import Main from '@/app/sections/Main';
import Footer from '@/app/sections/Footer';
import './globals.css';

export default function Home() {
    return (
        <div className="w-full overflow-x-hidden">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
