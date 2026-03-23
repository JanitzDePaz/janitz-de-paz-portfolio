export const AboutMe = () => (
  <section className="mt-(--header-height)">
    <div className="w-3/5 p-20 grid grid-cols-[0.3fr_0.7fr] grid-rows-2 border border-(--primary-border) rounded-2xl">
      <img src="" alt="" className="aspect-square min-w-40 rounded-full border-2" />
      <div>
        <p>
          Estudiante de 1º de DAW apasionado por el desarrollo web Full-stack.
          Enfocado en construir soluciones escalables con React y TypeScript,
          priorizando siempre la calidad del código y la arquitectura limpia.
        </p>
      </div>
      <ul className="list-disc flex flex-col justify-center gap-3.5">
        <li>Linkedin</li>
        <li>Github</li>
      </ul>
      <div className="border-2">NO SE QUE PONER</div>
    </div>
  </section>
);
