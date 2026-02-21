import Image from 'next/image';
import Headshot from '@/assets/headshot/Headshot.jpeg'

export const About = () => {
    return (
        <div className="flex flex-col scroll-mt-25 md:scroll-mt-40" id="about">
            <p className="text-[32px] leading-none text-brand-blue font-inter">
                &lt;<span className="text-brand-white-title">about me</span>&gt;
            </p>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-7 md:mt-18 items-start">
                
                {/* Desktop Image */}
                <Image
                    src={Headshot}
                    alt="Katie Chickering"
                    className="hidden md:block md:w-56 lg:w-[366px] h-auto"
                />

                <div className="font-ntr text-[16px] md:text-[20px] text-brand-white-text leading-6 md:leading-7 flex flex-col gap-5">
                    <p>
                        Hi, I’m Katie, a <span className="text-brand-blue">Software Engineer</span> who learned to code and never looked back!
                        I specialize in <span className="text-brand-blue">front-end</span> and
                        <span className="text-brand-blue"> mobile development</span>, specifically with
                        <span className="text-brand-blue"> React / React Native</span> and
                        <span className="text-brand-blue"> TypeScript frameworks</span>.
                    </p>

                    <p>
                        My background in both fitness and executive support has always centered on
                        <span className="text-brand-blue"> helping others succeed</span>.
                        In these roles, I relied on a wide range of software tools and became increasingly interested in how those systems were built.
                        This curiosity ultimately pushed me toward pursuing software engineering, where I can create my own solutions to help others.
                    </p>

                    <p>
                        I graduated from <span className="text-brand-blue">Coding Dojo</span> at Colorado Technical University in July 2025 with
                        <span className="text-brand-blue"> 3 full stacks</span> under my belt.
                        Since then, I’ve built many projects including a cross platform mobile application with 2 distinct interfaces
                        and dozens of screens to handle complex task management workflows.
                        Built for a client alongside a backend engineer and a UI/UX designer, this project highlights my work as the
                        <span className="text-brand-blue"> front-end engineer</span>.
                        It showcases my technical expertise and my ability to deliver
                        <span className="text-brand-blue"> robust, feature-rich solutions</span> through
                        <span className="text-brand-blue"> effective collaboration</span>.
                        Check out the project below!
                    </p>
                </div>

                {/* Mobile Image */}
                <Image
                    src={Headshot}
                    alt="Katie Chickering"
                    className="md:hidden block mx-auto w-[186px] h-auto"
                />

            </div>
        </div>
    );
};
