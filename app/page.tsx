import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import ServicesPreview from '@/components/ServicesPreview';
import ProjectsPreview from '@/components/ProjectsPreview';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Logos />
            <ServicesPreview />
            <ProjectsPreview />
            <WhyUs />
            <Process />
            <Stats />
            <Testimonials />
            <FAQ />
            <CTA />
        </>
    );
}
