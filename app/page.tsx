import Hero from '@/components/sections/Hero';
import LogoWall from '@/components/sections/LogoWall';
import BentoGrid from '@/components/sections/BentoGrid';
import FeaturedWorks from '@/components/sections/FeaturedWorks';
import Testimonials from '@/components/sections/Testimonials';
import StatsCounter from '@/components/sections/StatsCounter';

const heroMediaMode: 'cards' | 'video' = 'video';

export default function HomePage() {
  return (
    <>
      <Hero mediaMode={heroMediaMode} videoSrc="/hero/hero-showreel.mp4" videoPoster="/hero/fallbackHero1.jpeg" />
      <LogoWall />
      <BentoGrid />
      <FeaturedWorks />
      <StatsCounter />
      <Testimonials />
    </>
  );
}
