'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import YouTubeIcon from '@/assets/icons/YouTubeIcon.svg';

type Video = {
    id: string;
    title: string;
};

export const Content = () => {
    const videos: Video[] = [
        { id: 'NpULSzfZfcg', title: 'How to Start Your First React Native Project' },
        { id: 'sb9tqc4Zug0', title: 'How to Install NativeWind to Your Expo App' },
        { id: 'rqrnTEGOz-4', title: 'Track My Chores Mobile App Demonstration' },
        { id: 'NKOs7kb_UJw', title: 'Track My Chores Mobile App Build Process' },
    ];

    return (
        <div className="flex flex-col scroll-mt-25 md:scroll-mt-40" id="content">
            <p className="text-[32px] leading-none text-brand-blue font-inter">
                &lt;<span className="text-brand-white-title">YouTube channel</span>&gt;
            </p>

            <a
                href="https://www.youtube.com/@katiechickering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue border-brand-blue w-fit mt-7 md:mt-18 mb-4 md:mb-8
                border rounded-full py-2 px-4 text-[13px] hover:bg-[#0C576D]"
            >
                View Channel
            </a>

            <div className="w-full">
                <Swiper
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                    }}
                    spaceBetween={20}
                    navigation
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }}
                    loop
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full"
                >
                    {videos.map((video) => (
                        <SwiperSlide key={video.id}>
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col p-4 bg-[#0F171A] rounded-2xl border border-[#3A4245]"
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full aspect-video object-cover rounded-2xl"
                                />

                                <p className="mt-2 text-[14px] text-brand-white-text font-inter pt-4 ps-12">
                                    {video.title}
                                </p>

                                <div className="flex items-center gap-2 py-4 ps-12">
                                    <YouTubeIcon className="w-6 h-auto" />
                                    <p className="text-[12px] text-brand-white-text font-inter">
                                        YouTube
                                    </p>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
