import { About } from '../components/About';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';
import { Content } from '../components/Content';
import { Education } from '../components/Education';
import { Home } from '../components/Home';
import { Projects } from '../components/Projects';

export const HomePage = () => {
    return (
        <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-10 md:px-15 lg:px-25 xl:px-39">

            {/* Hero Section */}
            <div className="min-h-screen pt-[30vh] md:pt-[35vh] scroll-mt-20" id="home">
                <Home />
            </div>

            {/* About Section */}
            <div>
                <About />
            </div>

            {/* Projects Section */}
            <div className="pt-[20vh]">
                <Projects />
            </div>

            {/* YouTube / Content Section */}
            <div className="pt-[20vh]">
                <Content />
            </div>

            {/* Education Section */}
            <div className="pt-[20vh]">
                <Education />
            </div>

            {/* Certifications Section */}
            <div className="pt-[20vh]">
                <Certifications />
            </div>

            {/* Contact Section */}
            <div className="pt-[20vh] mb-25">
                <Contact />
            </div>

        </div>
    );
};
