import BulletIcon from '@/assets/icons/BulletIcon.svg';
import StackIcon from '@/assets/icons/StackIcon.svg';
import WebIcon from '@/assets/icons/WebIcon.svg';
import ReactIcon from '@/assets/icons/ReactIcon.svg';
import SettingsIcon from '@/assets/icons/SettingsIcon.svg';
import YosemiteReservationsPhoto1 from '@/assets/YosemiteReservations/YosemiteReservationsPhoto1.svg';
import YosemiteReservationsPhoto2 from '@/assets/YosemiteReservations/YosemiteReservationsPhoto2.svg';

export const YosemiteReservations = () => {
    return (
        <div className="flex flex-col font-inter text-brand-white-text">
            <p className="text-[20px] text-brand-white-title">
                Yosemite Campsite Reservations <span className="text-brand-blue">Web Application</span>
            </p>

            <div className="flex gap-6 mb-4">
                <a
                    href="https://yosemite-reservations.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue border-brand-blue border rounded-full py-2 px-4 text-[13px] hover:bg-[#0C576D] mt-4"
                >
                    View Website
                </a>
                <a
                    href="https://github.com/katiechickering/yosemite-reservations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue border-brand-blue border rounded-full py-2 px-4 text-[13px] hover:bg-[#0C576D] mt-4"
                >
                    View on GitHub
                </a>
            </div>

            <div className="flex gap-4 items-center my-4">
                <BulletIcon className="w-1.5 h-1.5 shrink-0" />
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
                        <StackIcon />
                    </div>
                    <p className="text-[11px] text-center">MERN<br/>Stack</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <WebIcon />
                    </div>
                    <p className="text-[11px] text-center">Web<br/>Development</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <StackIcon />
                    </div>
                    <p className="text-[11px] text-center">Full Stack<br/>Development</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <SettingsIcon />
                    </div>
                    <p className="text-[11px] text-center">Application Programming<br/>Interfaces (API)</p>
                </div>
            </div>

            <div className="flex gap-4 items-center mt-8 mb-4">
                <BulletIcon className="w-1.5 h-1.5 shrink-0" />
                <p className="text-brand-blue text-[14px]">Technologies Used</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li><span className="font-bold">Core Stack:</span> Vite, React, Node.js + Express, MongoDB</li>
                <li><span className="font-bold">Languages:</span> Javascript</li>
                <li><span className="font-bold">TailWindCSS:</span> Front-end styling</li>
                <li><span className="font-bold">National Park Service:</span> Public API</li>
                <li><span className="font-bold">Vercel:</span> Front-end website deployment</li>
                <li><span className="font-bold">Render:</span> Backend server deployment</li>
                <li><span className="font-bold">GitHub:</span> Version control</li>
            </ul>

            <div className="flex gap-4 items-center mt-8 mb-4">
                <BulletIcon className="w-1.5 h-1.5 shrink-0" />
                <p className="text-brand-blue text-[14px]">Highlights</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li>Register an account to enter the app</li>
                <li>Reserve your spot at one of Yosemite's beautiful campsites</li>
                <li>Search the reservations page by campsite</li>
                <li>Edit, view or delete your reservations as needed</li>
                <li>Read about Yosemite news and information</li>
            </ul>

            <div className="-mx-4 md:mx-0">
                <div className="flex justify-start md:justify-center my-8 w-full overflow-x-auto">
                    <div className="shrink-0 min-w-[572px] md:w-full px-4 md:px-0">
                        <YosemiteReservationsPhoto1 className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center mb-4">
                <BulletIcon className="w-1.5 h-1.5 shrink-0" />
                <p className="text-brand-blue text-[14px]">Overview</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-6 leading-[27px]">
                <li>
                    This project was built with a Node.js and Express backend and a React frontend styled with Tailwind CSS. Created with an MVC structure,
                    this app uses MongoDB for the model, an Express API as the controller, and React for the view.
                </li>
                <li>
                    It also integrates data from the National Park Service public API. The reservation feature provides full CRUD functionality.
                    I implemented login and registration using JSON Web Tokens stored in browser cookies for authentication.
                </li>
                <li>
                    I created this app to showcase my expertise in the MERN stack, as well as my love for the outdoors!
                    I also created the Park Information tab to display my ability in working with external APIs and modern frontend styling.
                </li>
            </ul>

            <div className="-mx-4 md:mx-0">
                <div className="flex justify-start md:justify-center my-8 w-full overflow-x-auto">
                    <div className="shrink-0 min-w-[572px] md:w-full px-4 md:px-0">
                        <YosemiteReservationsPhoto2 className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center mb-4">
                <BulletIcon className="w-1.5 h-1.5 shrink-0" />
                <p className="text-brand-blue text-[14px]">Deployment</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-6 leading-[27px]">
                <li>
                    To deploy my application, I used Render for the backend server and Vercel for the frontend React application.
                    Both services are connected to my GitHub monorepo and automatically update whenever changes are pushed to the repository.
                    Render routes to my server folder, while Vercel routes to my client folder.
                </li>
                <li>
                    I have included .env.example files in both my client and server folders to show how my environment variables are set up.
                </li>
                <li>
                    To host my database, I used MongoDB Atlas.
                </li>
            </ul>
        </div>
    );
};