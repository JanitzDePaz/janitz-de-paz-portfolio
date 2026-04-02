export const Spotlight = ({color, size, position} : SpotlightTypes) => (
    <article className={`absolute rounded-full blur-3xl ${color} ${size} ${position}`} />
)