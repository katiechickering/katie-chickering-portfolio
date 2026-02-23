import { About } from '@/components/About';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Content } from '@/components/Content';
import { Education } from '@/components/Education';
import { Home } from '@/components/Home';
import { Projects } from '@/components/Projects';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
    return (
        <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-10 md:px-15 lg:px-25 xl:px-39">

            {/* Hero Section */}
            <div className="min-h-screen pt-[30vh] md:pt-[35vh] scroll-mt-20" id="home">
                <Home />
            </div>

            {/* About Section */}
            <ScrollReveal>
                <About />
            </ScrollReveal>

            {/* Projects Section */}
            <div className="pt-[20vh]">
                <ScrollReveal>
                    <Projects />
                </ScrollReveal>
            </div>

            {/* YouTube / Content Section */}
            <div className="pt-[20vh]">
                <ScrollReveal>
                    <Content />
                </ScrollReveal>
            </div>

            {/* Education Section */}
            <div className="pt-[20vh]">
                <ScrollReveal>
                    <Education />
                </ScrollReveal>
            </div>

            {/* Certifications Section */}
            <div className="pt-[20vh]">
                <ScrollReveal>
                    <Certifications />
                </ScrollReveal>
            </div>

            {/* Contact Section */}
            <div className="pt-[20vh] mb-25">
                <ScrollReveal>
                    <Contact />
                </ScrollReveal>
            </div>

        </div>
    );
};
