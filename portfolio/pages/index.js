import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import UpperSection from '@/components/upper-section/UpperSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <UpperSection />
    </main>
  );
}
