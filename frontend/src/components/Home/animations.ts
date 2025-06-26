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
    gsap.fromTo(".Link",
        { opacity: 0, scale: 0.7}, 
        { opacity: 1, duration: 0.8, ease:"power3" ,stagger: 0.2, scale: 1, yoyo: true}
    );
  }, [])
}

export const LogoAnimation = () => {
  useEffect(() => {
    // Animação de batida de coração
    gsap.set('.Icon', { scale: 1, filter: 'drop-shadow(0 0 0px transparent)' });
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
    tl.to('.Icon', {
      scale: 1.18,
      duration: 0.18,
      ease: 'power1.in',
      filter: 'drop-shadow(25px 0 0px rgb(255, 255, 255))'
    })
    .to('.Icon', {
      scale: 0.98,
      duration: 0.20,
      ease: 'power1.out',
      filter: 'drop-shadow(-25px 0 0px transparent)'
    })
    .to('.Icon', {
      scale: 1.12,
      duration: 0.13,
      ease: 'power1.in',
      filter: 'drop-shadow(25px 0 0px #1a9ef6)'
    })
    .to('.Icon', {
      scale: 1,
      duration: 0.25,
      ease: 'power1.out',
      filter: 'drop-shadow(-25px 0 0px transparent)'
    })
    .to('.Icon', {
      duration: 0.2
    }); // Pausa entre batidas
  }, [])
}
