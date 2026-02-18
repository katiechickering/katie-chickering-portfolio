import BulletIcon from '@/public/assets/icons/BulletIcon.svg';
import StackIcon from '@/public/assets/icons/StackIcon.svg';
import FlaskIcon from '@/public/assets/icons/FlaskIcon.svg';
import SQLIcon from '@/public/assets/icons/SQLIcon.svg';
import PythonIcon from '@/public/assets/icons/PythonIcon.svg';
import HTMLIcon from '@/public/assets/icons/HTMLIcon.svg';
import BirdWatchingPhoto1 from '@/public/assets/BirdWatching/BirdWatchingPhoto1.svg';
import BirdWatchingPhoto2 from '@/public/assets/BirdWatching/BirdWatchingPhoto2.svg';

export const BirdWatching = () => {
    return (
        <div className="flex flex-col font-inter text-brand-white-text">
            <p className="text-[20px] text-brand-white-title">
                Bird Watching Forum <span className="text-brand-blue">Web Application</span>
            </p>

            <div className="flex gap-6 mb-4">
                <a
                    href="https://bird-watching-theta.vercel.app/"
                    className="text-brand-blue border-brand-blue
                    border rounded-full py-2 px-4 text-[13px] hover:bg-[#0C576D] mt-4"
                >
                    View Website
                </a>

                <a
                    href="https://github.com/katiechickering/bird-watching"
                    className="text-brand-blue border-brand-blue
                    border rounded-full py-2 px-4 text-[13px] hover:bg-[#0C576D] mt-4"
                >
                    View on GitHub
                </a>
            </div>

            <div className="flex gap-4 items-center my-4">
                <BulletIcon />
                <p className="text-brand-blue text-[14px]">Skills</p>
            </div>

            <div className="flex flex-wrap gap-10 ms-8">
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <FlaskIcon />
                    </div>
                    <p className="text-[11px] text-center">Flask</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <SQLIcon />
                    </div>
                    <p className="text-[11px] text-center">MySQL</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <PythonIcon />
                    </div>
                    <p className="text-[11px] text-center">Python</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <HTMLIcon />
                    </div>
                    <p className="text-[11px] text-center">HTML</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#0C576D] rounded-full p-2 size-9 flex justify-center items-center">
                        <StackIcon />
                    </div>
                    <p className="text-[11px] text-center">
                        Full Stack<br/>Development
                    </p>
                </div>
            </div>

            <div className="flex gap-4 items-center mt-8 mb-4">
                <BulletIcon />
                <p className="text-brand-blue text-[14px]">Technologies Used</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li>
                    <span className="font-bold">Core Stack:</span> Flask, MySQL
                </li>
                <li>
                    <span className="font-bold">Languages:</span> Python, SQL, Jinja, HTML
                </li>
                <li>
                    <span className="font-bold">Bootstrap:</span> Front-end styling
                </li>
                <li>
                    <span className="font-bold">Vercel:</span> Website deployment
                </li>
                <li>
                    <span className="font-bold">TiDB:</span> MySQL database host
                </li>
                <li>
                    <span className="font-bold">GitHub:</span> Version control
                </li>
            </ul>

            <div className="flex gap-4 items-center mt-8 mb-4">
                <BulletIcon />
                <p className="text-brand-blue text-[14px]">Highlights</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-2 leading-[27px]">
                <li>Create a profile to log in</li>
                <li>Post your sightings on a dynamic forum</li>
                <li>Edit, view or delete your posts as needed</li>
                <li>Interact with posts through likes and comments</li>
            </ul>

            <div className="-mx-4 md:mx-0">
                <div className="flex justify-start md:justify-center my-8 w-full overflow-x-auto">
                    <div className="shrink-0 min-w-[572px] md:w-full px-4 md:px-0">
                        <BirdWatchingPhoto1 className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center mb-4">
                <BulletIcon />
                <p className="text-brand-blue text-[14px]">Overview</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-6 leading-[27px]">
                <li>
                    As a recent graduate from the Coding Dojo program at Colorado Technical University,
                    I created this project to showcase my skills with Flask, Python, SQL, Jinja, Bootstrap, and HTML.
                </li>
                <li>
                    My files are organized in an MVC format with flask_app, config, controllers, models, and templates folders.
                    This bird watching forum consists of 4 different SQL tables that all interact with each other.
                </li>
                <li>
                    This project connects to and modifies SQL tables with Python and displays the data dynamically with Jinja and HTML.
                </li>
            </ul>

            <div className="-mx-4 md:mx-0">
                <div className="flex justify-start md:justify-center my-8 w-full overflow-x-auto">
                    <div className="shrink-0 min-w-[572px] md:w-full px-4 md:px-0">
                        <BirdWatchingPhoto2 className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center mb-4">
                <BulletIcon />
                <p className="text-brand-blue text-[14px]">Deployment</p>
            </div>

            <ul className="ms-8 text-[14px] list-disc list-outside flex flex-col gap-6 leading-[27px]">
                <li>
                    To deploy my application, I used Vercel which is a cloud platform for hosting full-stack applications.
                    It syncs with GitHub and updates my project every time I push to the main branch.
                </li>
                <li>
                    I used TiDB as the MySQL database host. It integrates with Vercel to make a seamless connection.
                </li>
                <li>
                    I included a .sql file and .env.example to show how my database and environment variables are set up.
                </li>
            </ul>
        </div>
    );
};