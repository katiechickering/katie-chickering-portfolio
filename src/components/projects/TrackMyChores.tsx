import BulletIcon from '@/assets/icons/BulletIcon.svg';
import DevIcon from '@/assets/icons/DevIcon.svg';
import MobileIcon from '@/assets/icons/MobileIcon.svg';
import ReactIcon from '@/assets/icons/ReactIcon.svg';
import WorkflowIcon from '@/assets/icons/WorkflowIcon.svg';
import Image from 'next/image';

export const TrackMyChores = () => {

    const screenGroups = [
        [5, 6, 7, 8],
        [1, 2, 3, 4]
    ]

    return (
        <div className="flex flex-col font-inter text-brand-white-text">
            <p className="text-[20px] text-brand-white-title">
                Track My Chores <span className="text-brand-blue">Mobile Application</span>
            </p>

            <div className="flex flex-wrap mt-4 gap-6">
                <a
                    href="https://apps.apple.com/us/app/track-my-chores/id6756340747"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue border-brand-blue border rounded-full py-2 px-4 text-[13px] hover:bg-[#0C576D]"
                >
                    Download on Apple App Store
                </a>
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
                    <div className="bg-[#0C576D] rounded-full p-2.75 size-9 flex justify-center items-center">
                        <MobileIcon />
                    </div>
                    <p className="text-[11px] text-center">Mobile Application<br/>Development</p>
                </div>
            </div>

            <div className="flex gap-4 items-center mt-8 mb-4">
                <BulletIcon className="w-1.5 h-1.5 shrink-0"/>
                <p className="text-brand-blue text-[14px]">Technologies Used</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li><span className="font-bold">Core Stack:</span> Expo Go + EAS Build, React Native, Node.js + Express, MongoDB</li>
                <li><span className="font-bold">Languages:</span> Javascript, JSX</li>
                <li><span className="font-bold">Cloudfare R2:</span> Image storage</li>
                <li><span className="font-bold">Agenda:</span> Server-side job scheduling</li>
                <li><span className="font-bold">EmailJS:</span> Registration and password reset emails</li>
                <li><span className="font-bold">NativeWind:</span> Front-end styling</li>
                <li><span className="font-bold">Figma:</span> Design collaboration with UI/UX designer</li>
                <li><span className="font-bold">Render:</span> Backend server deployment</li>
                <li><span className="font-bold">Dev Tools:</span> GitHub, Android Studio, Xcode</li>
            </ul>

            <div className="flex gap-4 items-center mt-8 mb-4">
                <BulletIcon className="w-1.5 h-1.5 shrink-0"/>
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

            <div className="-mx-4 md:mx-0 mt-10">
                {/* Mobile: horizontal scroll */}
                <div className="flex md:hidden overflow-x-auto gap-6 scroll-smooth pb-2 px-4">
                    {screenGroups.map((group, i) => (
                        <div key={i} className="shrink-0 w-[272px] grid grid-cols-2 gap-3">
                            {group.map((num) => (
                                <Image
                                    key={num}
                                    src={`/TrackMyChores/TrackMyChoresPhone${num}.svg`}
                                    alt={`Track My Chores screen ${num}`}
                                    width={126}
                                    height={253}
                                    className="w-[126px] h-auto"
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Desktop: two rows */}
                <div className="hidden md:block">
                    {screenGroups.map((group, i) => (
                        <div key={i} className="flex justify-center gap-4 mt-6 first:mt-0">
                            {group.map((num) => (
                                <Image
                                    key={num}
                                    src={`/TrackMyChores/TrackMyChoresPhone${num}.svg`}
                                    alt={`Track My Chores screen ${num}`}
                                    width={126}
                                    height={253}
                                    className="flex-1 min-w-0 h-auto"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-4 items-center mb-4 mt-8">
                <BulletIcon className="w-1.5 h-1.5 shrink-0"/>
                <p className="text-brand-blue text-[14px]">Deployment</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li>
                    Our app is currently available on the Apple App Store! We are in the testing phase
                    for Google Play and plan to release it there soon.
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
                    Back-end Engineer - Ariella Rollins -{' '}
                    <a 
                        href="https://github.com/Ariella-Rollins" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:underline"
                    >
                        github.com/Ariella-Rollins
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
};