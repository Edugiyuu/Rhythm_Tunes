import { gsap } from "gsap";

export const triggerModeSelector = () => {
  gsap.fromTo('.ModeSelectorTitle', {
        y: -250,
        x: -1300,
    },
    {
      y: 0,
      x:0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.fromTo('.ModeSelectorTitle h2', {
            scale:1
        },
        {
            scale:1.01,
            duration: 0.3,
            repeat: -1,
            yoyo: true,
        });
      }
    }, 
  );
  gsap.fromTo('.ModeButton', {
            x:400,
        },
        {
            x:0,
            opacity:1,
            delay:1,
            duration: 0.2,
            stagger:0.2,
            ease: "power2.inOut",
            
        }
    )
    /* gsap.to('.ModeButtons', 
        {

            x:"-=50",
            
            delay:3,
            duration: 0.4,
            stagger:0.2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            
        }
    ) */
    
};