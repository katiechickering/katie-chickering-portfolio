import Image from 'next/image';

export const About = () => {
    return (
        <div className="flex flex-col scroll-mt-25 md:scroll-mt-40" id="about">
            <p className="text-[32px] leading-none text-brand-blue font-inter">
                &lt;<span className="text-brand-white-title">about me</span>&gt;
            </p>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-7 md:mt-18 items-start">
                
                {/* Desktop Image */}
                <Image
                    src={"/headshot/Headshot.jpeg"}
                    alt="Katie Chickering"
                    className="hidden md:block"
                    width={366}
                    height={366}
                />

                <div className="font-ntr text-[16px] md:text-[20px] text-brand-white-text leading-6 md:leading-7 flex flex-col gap-5">
                    <p>
                        Hi, I’m Katie, an <span className="text-brand-blue">Engineer</span> who thrives at the intersection of deep
                        technical problem-solving and customer success.
                        I specialize in <span className="text-brand-blue">front-end</span> and
                        <span className="text-brand-blue"> mobile development</span>, with a heavy focus on
                        <span className="text-brand-blue"> React Native</span>,
                        <span className="text-brand-blue"> React</span> and
                        <span className="text-brand-blue"> TypeScript</span>.
                    </p>

                    <p>
                        My background in fitness and executive support has always been about
                        <span className="text-brand-blue"> helping others succeed</span>.
                        In those roles, I became the
                        <span className="text-brand-blue"> "technical go-to"</span>
                        for my teams, which sparked a curiosity about
                        how software systems are built from the ground up. That curiosity led me to pursue a rigorous
                        engineering foundation so I could solve the complex technical hurdles that standard support can’t reach.
                    </p>

                    <p>
                        I graduated from <span className="text-brand-blue">Coding Dojo</span> in July 2025 with
                        <span className="text-brand-blue"> three full stacks</span> under my belt (
                        <span className="text-brand-blue">Python</span>,
                        <span className="text-brand-blue"> JavaScript</span>, and
                        <span className="text-brand-blue"> Java</span>).
                        Since then, I’ve architected and launched a cross-platform mobile application
                        featuring dozens of screens and complex workflows.
                        Working alongside a back-end engineer and a UI/UX designer, I served as the
                        <span className="text-brand-blue"> front-end engineer</span>
                        triageing bugs, managing integrations, and collaborating across teams to deliver a
                        <span className="text-brand-blue"> feature-rich product</span>.
                    </p>

                    <p>
                        I’m now looking to use my engineering background to bridge the gap between technical
                        complexity and the people who use the software. Check out my projects below!
                    </p>
                </div>

                {/* Mobile Image */}
                <Image
                    src={"/headshot/Headshot.jpeg"}
                    alt="Katie Chickering"
                    className="md:hidden block mx-auto"
                    width={186}
                    height={186}
                />

            </div>
        </div>
    );
};
