'use client';

import { useState, useEffect } from 'react';
import BulletIcon from '@/public/assets/icons/BulletIcon.svg';
import DevIcon from '@/public/assets/icons/DevIcon.svg';
import MobileIcon from '@/public/assets/icons/MobileIcon.svg';
import ReactIcon from '@/public/assets/icons/ReactIcon.svg';
import WorkflowIcon from '@/public/assets/icons/WorkflowIcon.svg';
import TrackMyChores3Phones from '@/public/assets/TrackMyChores/TrackMyChores3Phones.svg';
import TrackMyChoresPhone1 from '@/public/assets/TrackMyChores/TrackMyChoresPhone1.svg';
import TrackMyChoresPhone2 from '@/public/assets/TrackMyChores/TrackMyChoresPhone2.svg';
import TrackMyChoresPhone3 from '@/public/assets/TrackMyChores/TrackMyChoresPhone3.svg';
import TrackMyChoresPhone4 from '@/public/assets/TrackMyChores/TrackMyChoresPhone4.svg';
import TrackMyChoresPhone5 from '@/public/assets/TrackMyChores/TrackMyChoresPhone5.svg';
import TrackMyChoresPhone6 from '@/public/assets/TrackMyChores/TrackMyChoresPhone6.svg';
import TrackMyChoresPhone7 from '@/public/assets/TrackMyChores/TrackMyChoresPhone7.svg';
import TrackMyChoresPhone8 from '@/public/assets/TrackMyChores/TrackMyChoresPhone8.svg';

export const TrackMyChores = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="flex flex-col font-inter text-brand-white-text">
            <p className="text-[20px] text-brand-white-title">
                Track My Chores <span className="text-brand-blue">Mobile Application</span>
            </p>

            <div className="flex flex-wrap mt-4 gap-6">
                <a
                    href="https://github.com/DojoEngineers/chore-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue border-brand-blue border rounded-full py-2 px-4 text-[13px] hover:bg-[#0C576D]"
                >
                    View on GitHub
                </a>
                <a
                    href="https://www.youtube.com/watch?v=NKOs7kb_UJw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue border-brand-blue border rounded-full py-2 px-4 text-[13px] hover:bg-[#0C576D]"
                >
                    View on YouTube
                </a>
                <a
                    href="https://www.linkedin.com/in/katiechickering/overlay/1769061364954/single-media-viewer/?profileId=ACoAACVDHh8Bhu09W_ydRozn0STEyLL8OuTI_sA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue border-brand-blue border rounded-full py-2 px-4 text-[13px] hover:bg-[#0C576D]"
                >
                    View Slide Deck
                </a>
            </div>

            <div className="flex gap-4 items-center mb-4 mt-8">
                <BulletIcon />
                <p className="text-brand-blue text-[14px]">Skills</p>
            </div>

            <div className="flex flex-wrap gap-10 ms-8">
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <ReactIcon />
                    </div>
                    <p className="text-[11px] text-center">React<br/>Native</p>
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
                        <WorkflowIcon />
                    </div>
                    <p className="text-[11px]">Scrum</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <MobileIcon />
                    </div>
                    <p className="text-[11px] text-center">Mobile Application<br/>Development</p>
                </div>
            </div>

            <div className="flex gap-4 items-center mt-8 mb-4">
                <BulletIcon />
                <p className="text-brand-blue text-[14px]">Technologies Used</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li><span className="font-bold">Core Stack:</span> Expo Go + EAS Build, React Native, Node.js + Express, MongoDB</li>
                <li><span className="font-bold">Languages:</span> Javascript</li>
                <li><span className="font-bold">Cloudfare R2:</span> Image storage</li>
                <li><span className="font-bold">Agenda:</span> Server-side job scheduling</li>
                <li><span className="font-bold">EmailJS:</span> Registration and password reset emails</li>
                <li><span className="font-bold">NativeWind:</span> Front-end styling</li>
                <li><span className="font-bold">Figma:</span> Design collaboration with UI/UX designer</li>
                <li><span className="font-bold">Render:</span> Backend server deployment</li>
                <li><span className="font-bold">Dev Tools:</span> GitHub, Android Studio, Xcode</li>
            </ul>

            <div className="flex gap-4 items-center mt-8 mb-4">
                <BulletIcon />
                <p className="text-brand-blue text-[14px]">Highlights</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li>Easily assign chores to your kids with separate parent and kid interfaces</li>
                <li>Create one-time or recurring tasks, set due dates, add notes, and assign chores to one or more kids in just a few taps</li>
                <li>Update, delete or reassign chores anytime when plans change</li>
                <li>View tasks by due date with an interactive calendar, see what's due in the Today tab, and view chores by kid in the Kids tab to stay organized</li>
                <li>Quickly approve completed chores with a single tap</li>
            </ul>

            <div className="-mx-4 md:mx-0">
                <div className="flex justify-start md:justify-center my-8 w-full overflow-x-auto">
                    <div className="shrink-0 min-w-[572px] md:w-full px-4 md:px-0">
                        <TrackMyChores3Phones className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center mb-4">
                <BulletIcon />
                <p className="text-brand-blue text-[14px]">Overview</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-6 leading-[27px]">
                <li>
                    This project was built with a Node.js and Express backend and a React Native frontend styled with NativeWind.
                    Following an MVC architecture, the application uses MongoDB as the model, an Express API as the controller, and React Native for the view.
                </li>
                <li>
                    Key features include full CRUD functionality for chores, user authentication with JSON Web Tokens, photo capture and storage, notifications,
                    and repeating chores powered by a chore template system and cron jobs. The project was conceptualized in Figma and includes both light and dark modes.
                    It was brought to life with dynamic, responsive styling that adapts well to a wide range of mobile screen sizes.
                </li>
                <li>
                    The application has been tested on both Android and iOS emulators to ensure a smooth cross-platform experience.
                    With over 30 unique screens and 2 distinct user interfaces, this project demonstrates our expertise in full-stack mobile application development.
                </li>
            </ul>

            {isMobile ? (
                <div className="-mx-4">
                    <div className="overflow-x-auto flex gap-6 scroll-smooth mt-10 pb-2 px-4">
                        <div className="shrink-0 w-[272px] grid grid-cols-2 gap-3">
                            <TrackMyChoresPhone5 className="w-[126px] h-auto" />
                            <TrackMyChoresPhone6 className="w-[126px] h-auto" />
                            <TrackMyChoresPhone7 className="w-[126px] h-auto" />
                            <TrackMyChoresPhone8 className="w-[126px] h-auto" />
                        </div>
                        <div className="shrink-0 w-[272px] grid grid-cols-2 gap-3">
                            <TrackMyChoresPhone1 className="w-[126px] h-auto" />
                            <TrackMyChoresPhone2 className="w-[126px] h-auto" />
                            <TrackMyChoresPhone3 className="w-[126px] h-auto" />
                            <TrackMyChoresPhone4 className="w-[126px] h-auto" />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex justify-center gap-4 mt-10">
                        <TrackMyChoresPhone5 className="flex-1 min-w-0 h-auto"/>
                        <TrackMyChoresPhone6 className="flex-1 min-w-0 h-auto"/>
                        <TrackMyChoresPhone7 className="flex-1 min-w-0 h-auto"/>
                        <TrackMyChoresPhone8 className="flex-1 min-w-0 h-auto"/>
                    </div>
                    <div className="flex justify-center gap-4 mt-6">
                        <TrackMyChoresPhone1 className="flex-1 min-w-0 h-auto"/>
                        <TrackMyChoresPhone2 className="flex-1 min-w-0 h-auto"/>
                        <TrackMyChoresPhone3 className="flex-1 min-w-0 h-auto"/>
                        <TrackMyChoresPhone4 className="flex-1 min-w-0 h-auto"/>
                    </div>
                </div>
            )}

            <div className="flex gap-4 items-center mb-4 mt-8">
                <BulletIcon />
                <p className="text-brand-blue text-[14px]">Deployment</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li>
                    We are currently in the user testing phase of our application and hope to deploy it on both
                    the Apple App Store and Google Play Store soon!
                </li>
            </ul>

            <div className="flex gap-4 items-center mb-4 mt-8">
                <BulletIcon />
                <p className="text-brand-blue text-[14px]">Authors</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li>Front End Engineer - Katie Chickering - https://github.com/katiechickering</li>
                <li>Back End Engineer - Ariella Rollins - https://github.com/Ariella-Rollins</li>
                <li>UI / UX Designer - Helena Contreras - https://www.linkedin.com/in/helena-g-4b5aa0133/</li>
            </ul>
        </div>
    );
};