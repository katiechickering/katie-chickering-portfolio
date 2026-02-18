import EmailIcon from '@/public/assets/icons/EmailIcon.svg';

export const Home = () => {
    return (
        <div className="flex flex-col font-inter">
            <p className="text-[20px] md:text-[40px] leading-none text-brand-blue">
                &lt;<span className="text-brand-white-title">hello</span>&gt;
            </p>

            <p
                className="text-brand-white-title leading-tight py-2 font-bold md:font-normal
                text-[clamp(32px,9vw,36px)] md:text-[72px] lg:text-[90px]"
            >
                I'm&nbsp;<span className="text-brand-blue">Katie Chickering</span>.
            </p>

            <p className="text-brand-white-text text-[20px] md:text-[28px] leading-6 md:leading-12">
                I build thoughtful digital experiences that help people succeed.
            </p>

            <p
                className="text-brand-white-text text-[12px] mt-4
                max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            >
                Software Engineer | Front-End & Mobile Development
                | Specialized in React Native & JavaScript
                Frameworks | Dedicated Project Lab Experience
            </p>

            <a
                href="mailto:katiechering@gmail.com?subject=Portfolio%20Inquiry"
                className="inline-flex items-center text-brand-blue gap-x-2 border-brand-blue
                border rounded-full py-2 px-7 mt-5 md:mt-8 text-[13px] hover:bg-[#0C576D] w-fit"
            >
                <EmailIcon className="w-6 h-6 shrink-0"/>
                Contact
            </a>
        </div>
    );
};
