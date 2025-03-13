import { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const animations = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            ".Music",
            { opacity: 0.1, y: 200, x: 550, perspective: 200, scale: 0.7, rotationX: 100, rotationY: 100, },
            {
                opacity: 1,
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                duration: 1,
                scale: 1,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".SelectMusic",
                    start: "top 60%",
                    end: "bottom bottom",
                    scrub: 1.5,
                },
            }
        );
        console.log("animação pronta");
        
    }, []);
}
