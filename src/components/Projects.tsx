'use client';

import { useState } from 'react';
import { TrackMyChores } from '@/components/projects/TrackMyChores';
import { YosemiteReservations } from '@/components/projects/YosemiteReservations';
import { ClosetOrganizer } from '@/components/projects/ClosetOrganizer';
import { BirdWatching } from '@/components/projects/BirdWatching';
import { PokemonRanker } from '@/components/projects/PokemonRanker';

type Section =
    | 'trackMyChores'
    | 'yosemiteReservations'
    | 'closetOrganizer'
    | 'birdWatching'
    | 'pokemonRanker';

export const Projects = () => {
    const [section, setSection] = useState<Section>('trackMyChores');

    return (
        <div className="flex flex-col scroll-mt-25 md:scroll-mt-40" id="projects">
            <p className="text-[32px] leading-none text-brand-blue font-inter">
                &lt;<span className="text-brand-white-title">projects</span>&gt;
            </p>

            <div className="flex flex-col md:flex-row gap-8 md:gap-25 mt-7 md:mt-18">

                {/* Sidebar Buttons */}
                <div className="-mx-4 md:mx-0">
                    <div
                        className="relative flex flex-row md:flex-col gap-0 md:gap-7 font-ntr text-brand-white-text text-[14px] md:text-[16px] shrink-0
                        md:overflow-visible overflow-x-auto scroll-smooth pb-2 md:pb-0 px-4 md:pl-0 md:pr-6"
                    >
                        {/* Indicator bar */}
                        <div
                            className="hidden md:block absolute right-0 w-[2px] bg-brand-blue transition-all duration-300 ease-in-out rounded-full"
                            style={{
                                height: '48px',
                                transform: `translateY(${
                                    section === 'trackMyChores' ? -12 :
                                    section === 'yosemiteReservations' ? 40 :
                                    section === 'closetOrganizer' ? 90 :
                                    section === 'birdWatching' ? 144 : 194
                                }px)`
                            }}
                        />

                        {[
                            { key: 'trackMyChores', label: 'TRACK MY CHORES' },
                            { key: 'yosemiteReservations', label: 'YOSEMITE CAMPSITES' },
                            { key: 'closetOrganizer', label: 'CLOSET ORGANIZER' },
                            { key: 'birdWatching', label: 'BIRD WATCHING' },
                            { key: 'pokemonRanker', label: 'POKEMON RANKER' },
                        ].map(({ key, label }) => (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setSection(key as Section)}
                                className={`hover:text-brand-blue transition-colors w-full whitespace-nowrap text-left
                                    px-2 py-1 md:p-0 border-b-2 md:border-0 ${
                                        section === key
                                            ? 'text-brand-blue bg-[#1A3E4A] md:bg-transparent rounded-t-lg border-brand-blue'
                                            : 'text-brand-white-text border-[#93A1A7]'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Panel */}
                <div
                    className="flex-1 animate-slide-up md:animate-slide-right"
                    key={section}
                >
                    {section === 'trackMyChores' ? (
                        <TrackMyChores />
                    ) : section === 'yosemiteReservations' ? (
                        <YosemiteReservations />
                    ) : section === 'closetOrganizer' ? (
                        <ClosetOrganizer />
                    ) : section === 'birdWatching' ? (
                        <BirdWatching />
                    ) : (
                        <PokemonRanker />
                    )}
                </div>

            </div>
        </div>
    );
};
