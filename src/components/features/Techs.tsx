import { techSection } from "../../constants/techSection";
import { TechCards } from "../ui/TechCards";

export const Techs = () => {
  return (
    <section id="Tecnologias">
      <div className="flex justify-center items-center flex-wrap gap-10 p-20">
        {techSection.map((obj, i) => (
          <TechCards key={i} name={obj.name} img={obj.img} color={obj.color} />
        ))}
      </div>
    </section>
  );
};
