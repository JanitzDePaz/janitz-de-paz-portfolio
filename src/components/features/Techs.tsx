import { techSection } from "../../constants/techSection";
import { ActionButton } from "../ui/ActionButton";
import { TechCards } from "../ui/TechCards";
import arrowDown from "../../assets/icons/arrowDown.svg";

export const Techs = () => {
  return (
    <section className="flex-col py-10 border-b border-white" id="Tecnologias">
      <div className="flex justify-center items-center flex-wrap gap-2 lg:gap-8 p-5 lg:p-10 w-screen">
        {techSection.map((obj, i) => (
          <TechCards key={i} name={obj.name} img={obj.img} color={obj.color} />
        ))}
      </div>
      <div className="flex flex-col gap-5 justify-center items-center w-fit">
        <ActionButton className="primaryButton" href="#Contacto">
          Conóceme
        </ActionButton>
        <ActionButton className="animate-bounce" href="#Contacto">
          <img src={arrowDown} alt="Flecha direccional" />
        </ActionButton>
      </div>
    </section>
  );
};
