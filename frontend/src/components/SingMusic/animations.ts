import { gsap } from "gsap";

export const triggerDialogAnimation = () => {
  gsap.fromTo('#RandomChar', {
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
  gsap.to('#RandomChar',
    {
      x: 550,
      duration: 2,
      opacity: 0,
      ease: "expo.inOut",
    },
  );
};

export const TPDialogBack = () => {
  gsap.to('#RandomChar',
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
    });
};

export const CutInAnimation = () => {
  gsap.fromTo('.CutIn', {
    opacity: 0,
  },
    {
      duration: 0.7,
      opacity: 1,
      ease: "circ.inOut",
    });
  gsap.fromTo('#CutInChar',{
    opacity: 0.8,
    scale: 0.4,
    rotateX: 90,
  },
  {
    scale: 1,
    rotateX: 0,
    duration: 0.6,
    opacity: 1,
    ease: "power4.inOut",
  });

  gsap.to('#CutInChar',
    {
      y: 1,
      duration: 0.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    }
  )
/*   gsap.fromTo('.cutin-effect',{
   x: -800,   
  },
  {
    x: 800,
    duration: 0.4,
    repeat: -1,
    stagger: 0.06,
    yoyo: true,
    ease: "power1.inOut",
  }
) */

  gsap.fromTo('#CutInChar', {
    opacity: 1,
  },
    {
      delay: 4,
      scale: 0.6,
      rotateX: 90,
      duration: 0.6,
      opacity: 0,
      ease: "circ.inOut",
      onComplete: () => {
        gsap.to('.CutIn', {
          opacity: 0,
          duration: 1,
          ease: "circ.inOut",
        });
      }
    });
};