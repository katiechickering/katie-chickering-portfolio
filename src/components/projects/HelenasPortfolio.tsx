import { useState, useEffect } from 'react';
import BulletIcon from '@/assets/icons/BulletIcon.svg';
import DevIcon from '@/assets/icons/DevIcon.svg';
import MobileIcon from '@/assets/icons/MobileIcon.svg';
import ReactIcon from '@/assets/icons/ReactIcon.svg';
import WorkflowIcon from '@/assets/icons/WorkflowIcon.svg';
import WebIcon from '@/assets/icons/WebIcon.svg';
import Image from 'next/image';

export const HelenasPortfolio = () => {
    return (
        <div className="flex flex-col font-inter text-brand-white-text">
            <p className="text-[20px] text-brand-white-title">
                Helena Contreras' Portfolio <span className="text-brand-blue">Website</span>
            </p>

            <div className="flex flex-wrap mt-4 gap-6">
                <a
                    href="https://helena-contreras-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue border-brand-blue border rounded-full py-2 px-4 text-[13px] hover:bg-[#0C576D]"
                >
                    View Website
                </a>
                <a
                    href="https://github.com/katiechickering/helena-contreras-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue border-brand-blue border rounded-full py-2 px-4 text-[13px] hover:bg-[#0C576D]"
                >
                    View on GitHub
                </a>
            </div>

            <div className="flex gap-4 items-center mb-4 mt-8">
                <BulletIcon className="w-1.5 h-1.5 shrink-0"/>
                <p className="text-brand-blue text-[14px]">Skills</p>
            </div>

            <div className="flex flex-wrap gap-10 ms-8">
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <ReactIcon />
                    </div>
                    <p className="text-[11px] text-center">React.js</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <DevIcon />
                    </div>
                    <p className="text-[11px] text-center">Front-End<br/>Development</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <WorkflowIcon />
                    </div>
                    <p className="text-[11px] text-center">Agile<br/>Methodologies</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <WebIcon />
                    </div>
                    <p className="text-[11px] text-center">Web<br/>Development</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2.75 size-9 flex justify-center items-center">
                        <MobileIcon />
                    </div>
                    <p className="text-[11px] text-center">Responsive<br/>Design</p>
                </div>
            </div>

            <div className="flex gap-4 items-center mt-8 mb-4">
                <BulletIcon className="w-1.5 h-1.5 shrink-0"/>
                <p className="text-brand-blue text-[14px]">Technologies Used</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li><span className="font-bold">Core Stack:</span> React, Next.js</li>
                <li><span className="font-bold">Languages:</span> TypeScript, TSX</li>
                <li><span className="font-bold">TailWindCSS:</span> Front-end styling</li>
                <li><span className="font-bold">Vercel:</span> Front-end website deployment</li>
                <li><span className="font-bold">Figma:</span> Design collaboration with UI/UX designer</li>
                <li><span className="font-bold">GitHub:</span> Version control</li>
            </ul>

            <div className="flex gap-4 items-center mt-8 mb-4">
                <BulletIcon className="w-1.5 h-1.5 shrink-0"/>
                <p className="text-brand-blue text-[14px]">Highlights</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li>Navigate seamlessly from a clean homepage to four individual project pages with dedicated case studies</li>
                <li>Explore 4 featured projects, each presented on its own page with detailed technical breakdowns</li>
                <li>Learn more about Helena's background and experience through a dedicated About Me page</li>
                <li>Connect easily using integrated Contact and Resume call-to-action buttons</li>
                <li>Experience a fully responsive design that adapts thoughtfully between desktop and mobile layouts</li>
            </ul>

            <div className="-mx-4 md:mx-0">
                <div className="flex justify-start md:justify-center my-8 w-full overflow-x-auto">
                    <div className="shrink-0 min-w-[572px] md:w-full px-4 md:px-0">
                        <Image
                            src="/TrackMyChores/TrackMyChores3Phones.svg"
                            alt="Track My Chores preview"
                            width={572}
                            height={336}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center mb-4">
                <BulletIcon className="w-1.5 h-1.5 shrink-0"/>
                <p className="text-brand-blue text-[14px]">Overview</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-6 leading-[27px]">
                <li>
                    This portfolio website showcases my work as a front-end developer through a clean, modern interface built with
                    Typescript, React, and Next.js.
                </li>
                <li>
                    The site was designed in Figma in collaboration with a UI/UX designer and built
                    with TailwindCSS for consistent, professional styling.
                </li>
                <li>
                    Rather than simply scaling layouts, the site delivers
                    intentionally crafted mobile and desktop experiences tailored to each platform.
                </li>
                <li>
                    The result demonstrates proficiency
                    in modern React patterns, component composition, and creating polished user experiences.
                </li>
            </ul>

            <div className="-mx-4 md:mx-0">
                <div className="flex justify-start md:justify-center my-8 w-full overflow-x-auto">
                    <div className="shrink-0 min-w-[572px] md:w-full px-4 md:px-0">
                        <Image
                            src="/YosemiteReservations/YosemiteReservationsPhoto2.svg"
                            alt="Yosemite Reservations screenshot 2"
                            width={608}
                            height={333}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center mb-4 mt-8">
                <BulletIcon className="w-1.5 h-1.5 shrink-0"/>
                <p className="text-brand-blue text-[14px]">Deployment</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li>
                    To deploy my website, I used Vercel. This service is connected to my GitHub
                    repository and will automatically update whenever changes are pushed.
                </li>
            </ul>

            <div className="flex gap-4 items-center mb-4 mt-8">
                <BulletIcon className="w-1.5 h-1.5 shrink-0"/>
                <p className="text-brand-blue text-[14px]">Authors</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li>
                    Front-end Engineer - Katie Chickering -{' '}
                    <a 
                        href="https://github.com/katiechickering" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:underline"
                    >
                        github.com/katiechickering
                    </a>
                </li>
                <li>
                    UI / UX Designer - Helena Contreras -{' '}
                    <a 
                        href="https://www.linkedin.com/in/helena-g-4b5aa0133/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:underline"
                    >
                        linkedin.com/in/helena-g-4b5aa0133
                    </a>
                </li>
            </ul>
        </div>
    );
}