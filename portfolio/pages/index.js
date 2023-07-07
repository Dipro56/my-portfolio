import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import UpperSection from '@/components/upper-section/UpperSection';
import AboutMeSection from '@/components/about-me-section/AboutMeSection';
import { EducationSection } from '@/components/education-section/EducationSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <UpperSection />
      <AboutMeSection />
      <EducationSection />
    </main>
  );
}
