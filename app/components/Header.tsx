'use client';

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="flex justify-between items-center max-w-7xl mx-auto
                px-4 sm:px-10 md:px-12 lg:px-16 xl:px-30 2xl:px-28 py-4 backdrop-blur-md"
            >
                <p className="font-enriqueta text-[32px] flex text-brand-white-title">
                    <span className="text-brand-blue">Katie&nbsp;</span> Chickering
                </p>

                {/* Desktop Nav */}
                <div className="hidden md:flex text-brand-white-text gap-x-8 text-[16px] font-inter">
                    <a href="#home" className="hover:text-brand-blue transition-colors">
                        Home
                    </a>
                    <a href="#about" className="hover:text-brand-blue transition-colors">
                        About
                    </a>
                    <a href="#projects" className="hover:text-brand-blue transition-colors">
                        Projects
                    </a>
                    <a href="#content" className="hover:text-brand-blue transition-colors">
                        Content
                    </a>
                    <a href="#education" className="hover:text-brand-blue transition-colors">
                        Education
                    </a>
                    <a href="#certifications" className="hover:text-brand-blue transition-colors">
                        Certifications
                    </a>
                    <a href="#contact" className="hover:text-brand-blue transition-colors">
                        Contact
                    </a>
                </div>

                {/* Mobile hamburger button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        onClick={() => setIsOpen(prev => !prev)}
                        className="text-brand-white-text focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>
            
            {/* Mobile Nav */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 md:hidden z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div
                        className="bg-[#0C576D] w-fit ml-auto z-50 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col text-brand-white-text font-inter px-4 py-2">
                            <a 
                                href="#home" 
                                className="py-2 hover:text-brand-blue transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </a>
                            <a 
                                href="#about" 
                                className="py-2 hover:text-brand-blue transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </a>
                            <a 
                                href="#projects" 
                                className="py-2 hover:text-brand-blue transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </a>
                            <a 
                                href="#content" 
                                className="py-2 hover:text-brand-blue transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Content
                            </a>
                            <a 
                                href="#education" 
                                className="py-2 hover:text-brand-blue transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Education
                            </a>
                            <a 
                                href="#certifications" 
                                className="py-2 hover:text-brand-blue transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Certifications
                            </a>
                            <a 
                                href="#contact" 
                                className="py-2 hover:text-brand-blue transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};