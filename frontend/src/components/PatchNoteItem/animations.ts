import { gsap } from "gsap";

export const triggerH2Animation = () => {
    gsap.to(".PatchNoteItem h2", {
        duration: 1.5,
        color: "rgb(50, 84, 255)",
        repeat: -1,
        yoyo: true
    });
    gsap.to(".PatchNoteItem li", {
        duration: 1,
        color: "rgb(17, 100, 255)",
        repeat: -1,
        yoyo: true
    });
};