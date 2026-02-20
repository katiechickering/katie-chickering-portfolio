'use client';
import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
    const [hasAppeared, setHasAppeared] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setHasAppeared(true)
                    observer.unobserve(domRef.current!)
                }
            })
        }, {
            threshold: 0, 
            rootMargin: '0px 0px -150px 0px'
        })

        if (domRef.current) observer.observe(domRef.current)
        
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={domRef}
            className={`${hasAppeared ? 'animate-slide-up' : 'opacity-0'}`}
        >
            {children}
        </div>
    );
}
