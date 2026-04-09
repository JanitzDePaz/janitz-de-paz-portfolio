import gsap from "gsap";
export const puzzleAnimation = () => {
  const mm = gsap.matchMedia();
  const desktop = "(min-width: 1024px)";
  const mobile = "(max-width: 1023px)";

  mm.add({ isDesktop: desktop, isMobile: mobile }, () => {
    const tl = gsap.timeline({
      repeat: -1,
    });
    const icons: HTMLElement[] = gsap.utils.toArray(".puzzleAnim");
    const distanceX = icons[1].offsetLeft - icons[0].offsetLeft;
    const distanceY = icons[3].offsetTop - icons[0].offsetTop;

    tl.to(icons[4], { x: distanceX });
    tl.to(icons[1], { y: distanceY });
    tl.to(icons[0], { x: distanceX });
    tl.to(icons[3], { y: -distanceY });
    tl.to(icons[1], { x: -distanceX });
    tl.to(icons[0], { y: distanceY });
    tl.to(icons[2], { x: -distanceX });
    tl.to(icons[4], { y: -distanceY });
    tl.to(icons[0], { x: distanceX * 2 });
    tl.to(icons[1], { x: 0 });
    tl.to(icons[3], { y: 0 });
    tl.to(icons[2], { x: -distanceX * 2 });
    tl.to(icons[1], { y: 0 });
    tl.to(icons[0], { x: distanceX });
    tl.to(icons[4], { y: 0 });
    tl.to(icons[1], { x: distanceX });
    tl.to(icons[0], { y: 0 });
    tl.to(icons[3], { x: distanceX });
    tl.to(icons[2], { y: distanceY });
    tl.to(icons[0], { x: 0 });
    tl.to(icons[1], { x: 0 });
    tl.to(icons[4], { y: -distanceY });
    tl.to(icons[3], { x: distanceX * 2 });
    tl.to(icons[2], { x: -distanceX });
    tl.to(icons[0], { y: distanceY });
    tl.to(icons[1], { x: -distanceX });
    tl.to(icons[2], { y: 0 });
    tl.to(icons[3], { x: distanceX });
    tl.to(icons[4], { y: 0 });
    tl.to(icons[2], { x: 0 });
    tl.to(icons[1], { x: 0 });
    tl.to(icons[0], { y: 0 });
    tl.to(icons[3], { x: 0 });
    tl.to(icons[4], { x: 0 });

    return () => {
      tl.kill();
      gsap.set(icons, { clearProps: "all" });
    };
  });
  return mm;
};
