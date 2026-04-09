import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);


export const scrollToId = (url: string) => {
    gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: url},
        ease: "power2.inOut"
    })
}