'use client';

import ArrowIcon from '@/assets/icons/ArrowIcon.svg';
import LinkedInIcon from '@/assets/icons/LinkedInIcon.svg';
import GitHubIcon from '@/assets/icons/GitHubIcon.svg';
import YouTubeIcon from '@/assets/icons/YouTubeIcon.svg';
import WhiteEmailIcon from '@/assets/icons/WhiteEmailIcon.svg';
import ResumeIcon from '@/assets/icons/ResumeIcon.svg';

export const Contact = () => {
    return (
        <div className="flex flex-col scroll-mt-25 md:scroll-mt-40" id="contact">
            <p className="text-[32px] leading-none text-brand-blue font-inter">
                &lt;<span className="text-brand-white-title">contact</span>&gt;
            </p>

            <p className="text-[20px] text-brand-white-text font-inter mt-7 md:mt-18">
                Let's connect!
            </p>

            <div className="flex flex-wrap mt-2 md:mt-4 items-center gap-2">
                
                <ArrowIcon className="hidden md:block w-[193px] h-auto" />

                <div className="gap-7 flex flex-wrap items-center">
                    <a
                        href="https://www.linkedin.com/in/katiechickering/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group transition-all duration-300"
                    >
                        <LinkedInIcon className="w-[33px] h-[33px] shrink-0 text-brand-white-text group-hover:text-brand-blue transition-colors"/>
                    </a>

                    <a
                        href="https://github.com/katiechickering"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group transition-all duration-300"
                    >
                        <GitHubIcon className="w-[34px] h-[34px] shrink-0 text-brand-white-text group-hover:text-brand-blue transition-colors"/>
                    </a>

                    <a
                        href="https://www.youtube.com/@katiechickering"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group transition-all duration-300"
                    >
                        <YouTubeIcon className="w-[36px] h-[27px] shrink-0 text-brand-white-text group-hover:text-brand-blue transition-colors"/>
                    </a>

                    <a
                        href="mailto:katiechickering@gmail.com?subject=Portfolio%20Inquiry"
                        className="group transition-all duration-300"
                    >
                        <WhiteEmailIcon className="w-[33px] h-[25px] shrink-0 text-brand-white-text group-hover:text-brand-blue transition-colors"/>
                    </a>
                </div>
            </div>

            <a
                href="/resume/KatieChickeringResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-blue gap-x-2 border-brand-blue
                border rounded-full py-2 px-7 mt-8 text-[13px] hover:bg-[#0C576D] w-fit"
            >
                <ResumeIcon className="w-[18px] h-[21px] shrink-0"/>
                View Resume
            </a>
        </div>
    );
};
