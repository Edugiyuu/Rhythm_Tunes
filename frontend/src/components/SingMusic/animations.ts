import { gsap } from "gsap";

export const triggerDialogAnimation = () => {
  gsap.fromTo('.PersonaChar', {
    x: 550,
    opacity: 0,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  },
    {
      x: 0,
      duration: 0.5,
      opacity: 1,

      ease: "power1.inOut",
    },
  );
};
export const triggerBackDialogAnimation = () => {
  gsap.to('.PersonaChar',
    {
      x: 550,
      duration: 2,
      opacity: 0,

      ease: "expo.inOut",
    },
  );
};
