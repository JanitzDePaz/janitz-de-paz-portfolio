import { techSection } from "../../constants/techSection";

export const Techs = () => {
  return (
    <section id="Tecnologias">
      <div className="flex justify-center items-center flex-wrap gap-10">
        {techSection.map((obj) => (
          <article
            key={obj.name}
            className="flex flex-col justify-center items-center gap-5 w-60 h-60 p-8 bg-[#080808] border border-[#1a1a1a] rounded-xl"
          >
            <img
              src={obj.img}
              alt={`${obj.name} icon`}
              className="w-30 aspect-square"
            />
            <span className="text-center ">{obj.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
};
