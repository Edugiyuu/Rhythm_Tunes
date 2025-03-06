import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const animations = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            ".Music",
            { opacity: 0.1, y: 200, x: 450, perspective: 200, scale: 0.5, rotationX: 100, rotationY: 100, },
            {
                opacity: 1,
                x: -50,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".SelectMusic",
                    start: "top center",
                    end: "bottom bottom",
                    scrub: 1.5,
                },
            }
        );
    }, []);
}
