import { useEffect } from "react";
import gsap from "gsap";
import { PlayAudio } from "../../utils/PlayAudio";

export const TriggerCountDown = () => {
  useEffect(() => {
    gsap.fromTo(".CountDownText1",
      {
        opacity: 0,
        x: 900,
      },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power3",
        x: "15vw",
        yoyo: true,
        onStart (){
          PlayAudio(`${import.meta.env.BASE_URL}/audios/Chie/InMusic/three.mp3`);
        },
        onComplete: () => {
          gsap.fromTo(".CountDownText2", {
            opacity: 0,
            x: -1000,
          },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power3",
            x: "-35vw",
            onStart (){
              PlayAudio(`${import.meta.env.BASE_URL}/audios/Chie/InMusic/two.mp3`);
            },
            onComplete(){
              gsap.fromTo(".CountDownText3", {
                opacity: 0,
                x: 1000,
              },
              {
                opacity: 1,
                duration: 0.8,
                ease: "power3",
                x: "15vw",
                onStart (){
                  PlayAudio(`${import.meta.env.BASE_URL}/audios/Chie/InMusic/one.mp3`);
                },
                onComplete() {
                  gsap.fromTo(".CountDownText4", {
                    opacity: 0,
                    x: -1000,
                  },
                  {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3",
                    x: "-35vw",
                    onStart (){
                    PlayAudio(`${import.meta.env.BASE_URL}/audios/Chie/InMusic/readyGo.mp3`);
                    },
                  });
                }
              });
            }
          });
        }
      }
    );
  }, [])
}
