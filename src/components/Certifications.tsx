'use client';

import { useState } from 'react';
import Image from 'next/image';
import HarvardOnline from '@/assets/Certifications/HarvardOnline.svg';
import CS50Certificate from '@/assets/Certifications/CS50Certificate.png';

export const Certifications = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col scroll-mt-25 md:scroll-mt-40" id="certifications">
            <p className="text-[32px] leading-none text-brand-blue font-inter">
                &lt;<span className="text-brand-white-title">certifications</span>&gt;
            </p>

            <div
                className="flex flex-col md:flex-row p-4 md:p-8 bg-[#0F171A]
                rounded-2xl border border-[#3A4245] mt-7 md:mt-18 gap-3 md:gap-12"
            >
                {/* Logo */}
                <div className="w-full md:w-28 flex items-center md:items-start justify-center md:justify-start shrink-0">
                    <HarvardOnline className="w-20 md:w-full h-auto" />
                </div>

                {/* Content */}
                <div className="flex flex-col font-inter text-brand-white-text text-[14px] w-full">
                    <p className="text-[20px] font-bold">
                        Introduction to Computer Science, CS50
                    </p>

                    <p className="text-[15px] py-3">
                        Certificate of Completion, Harvard Online
                    </p>

                    <ul className="ms-8 list-disc list-outside flex flex-col gap-2">
                        <li>Issued Jun 2024</li>
                        <li>Languages: C, Python, HTML, CSS, SQL</li>
                        <li>Technologies: MySQL, Flask</li>
                        <li>Programs: VSCode, Github</li>
                        <li>10 problem sets & 1 final full stack project</li>
                    </ul>

                    <div className="flex gap-4 pt-3 w-full justify-center md:justify-start">
                        <button
                            type="button"
                            className="text-brand-blue border-brand-blue w-fit
                            border rounded-full py-2 px-4 hover:bg-[#0C576D]"
                            onClick={() => setIsModalOpen(true)}
                        >
                            View Certification
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div className="w-full overflow-x-auto flex justify-center">
                        <div
                            className="shrink-0 w-[572px] md:max-w-3xl md:w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={CS50Certificate}
                                alt="CS50 Certificate"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
