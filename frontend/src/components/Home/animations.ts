import { useEffect } from 'react'
import gsap from 'gsap'

export const animations = () => {
  useEffect(() => {
    gsap.to('.star', {
        y: "-=40",
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "power1.inOut",
    });
    gsap.to('.star', {
        scale: 1.8,
        rotationX: 200,
        rotationY: 200,
        duration: 1.3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2,
        transformOrigin: "center",
        perspective: 500
    });
    gsap.to('.star', {
        scale: 1.8,
        rotationX: 200,
        rotationY: 200,
        duration: 1.3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2,
        transformOrigin: "center",
        perspective: 500
    });
    gsap.fromTo(".Link",
        { opacity: 0, scale: 0.7}, 
        { opacity: 1, duration: 0.8, ease:"power3" ,stagger: 0.2, scale: 1, yoyo: true}
    );
  }, [])
}
