import { gsap } from "gsap";

export const animations = () => {

  const triggerAnimation = () => {
    gsap.to('.ViewMusic', {
        y: "+=3",
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
    });
    gsap.fromTo(
      ".ViewMusic", 
      {
        opacity: 1,
        y: 0,
        x: 550,
        scale: 0.7,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
        scale: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  };
  return triggerAnimation; 
};
