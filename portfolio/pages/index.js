import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import UpperSection from '@/components/upper-section/UpperSection';
import AboutMeSection from '@/components/about-me-section/AboutMeSection';
import { EducationSection } from '@/components/education-section/EducationSection';
import { WorkExperienceSection } from '@/components/work-experience-section/WorkExperienceSection';
import SkillSection from '@/components/skill-section/SkillSection';
import ProjectSection from '@/components/project-section/ProjectSection';
import ExtraCurricularSection from '@/components/extra-curricular-section/ExtraCurricularSection';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <UpperSection />
      <AboutMeSection />
      <EducationSection />
      <WorkExperienceSection />
      <SkillSection />
      <ProjectSection />
      <ExtraCurricularSection />
      <Footer />
    </main>
  );
}
