import { gsap } from "gsap";

export const triggerAlbumImg = () => {
  gsap.fromTo('.MusicEnded img', {
    opacity: 0,
    ease: "power1.inOut",
  },
    {
      x: 0,
      y: 0,
      duration: 0.5,
      opacity: 1,

      ease: "power1.inOut",
    },
  );
};
export const triggerResult = () => {
  gsap.fromTo('.Result', {
    x: "80%",
   
    ease: "power1.inOut",
  },
    {
      x: 0,
      y: 0,
      duration: 0.5,
      opacity: 1,

      ease: "power1.inOut",
    },
  );
};