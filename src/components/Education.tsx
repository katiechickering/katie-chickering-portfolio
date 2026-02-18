import UCSC from '@/assets/Education/UCSC.svg';
import CodingDojo from '@/assets/Education/CodingDojo.svg';

export const Education = () => {
    return (
        <div className="flex flex-col scroll-mt-25 md:scroll-mt-40" id="education">
            <p className="text-[32px] leading-none text-brand-blue font-inter">
                &lt;<span className="text-brand-white-title">education</span>&gt;
            </p>

            <div className="-mx-4 md:mx-0">
                <div className="md:space-y-9 overflow-x-auto md:overflow-visible mt-7 md:mt-18 pb-2 md:pb-0 px-4 md:px-0">
                    <div className="flex flex-nowrap md:block gap-4 md:gap-0">

                        {/* Coding Dojo */}
                        <div
                            className="flex flex-col md:flex-row p-4 md:p-8 bg-[#0F171A]
                            rounded-2xl border border-[#3A4245] shrink-0 gap-3 w-[80vw] md:w-auto"
                        >
                            <div className="w-full md:w-28 flex items-center md:items-start justify-center md:justify-start shrink-0">
                                <CodingDojo className="w-20 md:w-full h-auto" />
                            </div>

                            <div className="flex flex-col font-inter text-brand-white-text text-[14px] md:ml-12">
                                <p className="text-[20px] font-bold">
                                    Coding Dojo, Colorado Technical University
                                </p>

                                <p className="text-[15px] py-3">
                                    Certification, Computer Software Engineering
                                </p>

                                <ul className="ms-8 list-disc list-outside flex flex-col gap-2">
                                    <li>
                                        Languages: Python, JavaScript, Java, HTML, CSS, SQL, Mongoose
                                    </li>
                                    <li>
                                        Technologies: MySQL, Flask, MongoDB, Express, React, Node.js, Springboot
                                    </li>
                                    <li>
                                        Programs: VSCode, MySQL Workbench, Postman, Github
                                    </li>
                                </ul>

                                <p className="py-3">
                                    Graduated an intensive software engineering program specializing in full-stack development across three core ecosystems:
                                    Python, JavaScript, and Java. The program ended with a final project where I engineered a full-stack solution
                                    from initial system design to final cloud deployment.
                                </p>

                                <p>
                                    Relevant courses: Programming Basics, Web Fundamentals, Python, MERN, Java, Project Building and Algorithms
                                </p>

                                <div className="w-fit pt-3">
                                    <div
                                        className="text-brand-blue border-brand-blue
                                        border rounded-full py-2 px-4"
                                    >
                                        Oct 2024 - Jul 2025
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* UCSC */}
                        <div
                            className="flex flex-col md:flex-row p-4 md:p-8 bg-[#0F171A]
                            rounded-2xl border border-[#3A4245] md:mt-9 shrink-0 gap-3 w-[80vw] md:w-auto"
                        >
                            <div className="w-full md:w-28 flex items-center md:items-start justify-center md:justify-start shrink-0">
                                <UCSC className="w-20 md:w-full h-auto" />
                            </div>

                            <div className="flex flex-col font-inter text-brand-white-text text-[14px] md:ml-12 h-full justify-between">
                                <p className="text-[20px] font-bold">
                                    University of California, Santa Cruz
                                </p>

                                <p className="text-[15px] py-3">
                                    Bachelor of Arts, Environmental Studies
                                </p>

                                <ul className="ms-8 list-disc list-outside flex flex-col gap-2">
                                    <li>Cum Laude Honors</li>
                                    <li>Environmental Studies Department Honors</li>
                                    <li>
                                        Minor in Sustainability Studies completed with a 4.0 GPA
                                    </li>
                                    <li>6 Dean's Honors Awards</li>
                                </ul>

                                <p className="py-3">
                                    Activities and societies: Alpha Psi Sorority President with 100+ members
                                </p>

                                <p>
                                    Relevant courses: Personal Computers
                                </p>

                                <div className="flex gap-4 pt-3">
                                    <div
                                        className="text-brand-blue border-brand-blue
                                        border rounded-full py-2 px-4"
                                    >
                                        2014 - 2018
                                    </div>

                                    <div
                                        className="text-brand-blue border-brand-blue
                                        border rounded-full py-2 px-4"
                                    >
                                        GPA: 3.7
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block md:hidden shrink-0 w-px" />
                    </div>
                </div>
            </div>
        </div>
    );
};
