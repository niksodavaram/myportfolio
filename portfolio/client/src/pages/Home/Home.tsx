// src/pages/Home.tsx
import HeroSection from '../../components/Hero/HeroSection';
import SecondNavbar from '../../components/Navbar/SecondNavBar';
import AboutSection from '../../components/About/AboutSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecondNavbar />
      <AboutSection />
    </>
  );
}