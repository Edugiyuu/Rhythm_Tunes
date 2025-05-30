import { gsap } from "gsap";

export const triggerDialogAnimation = () => {
  gsap.fromTo('#RandomChie', {
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
  gsap.to('#RandomChie',
    {
      x: 550,
      duration: 2,
      opacity: 0,
      ease: "expo.inOut",
    },
  );
};

export const TPDialogBack = () => {
  gsap.to('#RandomChie',
    {
      duration: 0,
      opacity: 0,
      ease: "expo.inOut",
    },
  );
};

export const triggerDialogAnimationMode = () => {
  gsap.fromTo('#ChieMode',
    {
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

export const triggerBackDialogAnimationMode = () => {
  gsap.to('#ChieMode',
    {
      x: 550,
      duration: 2,
      opacity: 0,
      ease: "expo.inOut",
    },
  );
};

export const triggerStar = () => {
  gsap.fromTo('#starEnd', {
    opacity: 0,

    ease: "power1.inOut",
  },
    {
      scale: 16,
      rotate: 355,
      duration: 1,
      opacity: 1,
      ease: "circ.inOut",
      /* onComplete: () => {
        gsap.fromTo('.MusicEnded', {

          opacity: 0,
          ease: "power1.inOut",
          
        },
          {
            opacity: 1,

        rotationX: 30,
        rotationY: 30,
        duration: 1.3,
    
        ease: "power1.inOut",
        transformOrigin: "center",
        perspective: 500
          })
      } */
    });
};