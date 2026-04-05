type ScrollAnimTypes = {
  className: string;
  direction: "up" | "down" | "right" | "left" | null;
  distance?: number;
  delay?: number;
  start: string;
  duration?: number;
  stagger?: number;
};