import { ActionButton } from "../ui/ActionButton";
import { Subtitle } from "../ui/Subtitle";
import { Title } from "../ui/Title";

export const Contact = () => {
  return (
    <section className="gap-30">
      <div className="flex flex-col gap-5 w-1/3">
        <Title>¿Hablamos?</Title>
        <Subtitle>Contruyamos algo juntos</Subtitle>
        <p className="text-lg">
          Estudiante de 1º de DAW apasionado por el desarrollo web Full-stack.
          Enfocado en construir soluciones escalables con React y TypeScript,
          priorizando siempre la calidad del código y la arquitectura limpia.
        </p>
        <hr />
        <div className="flex gap-5">
          <ActionButton
            href="www.linkedin.com/in/janitz-de-paz"
            className="primaryButton"
          >
            LinkedIn
          </ActionButton>
          <ActionButton
            href="https://github.com/JanitzDePaz"
            className="primaryButton"
          >
            GitHub
          </ActionButton>
        </div>
      </div>

      <form className="border border-gray-700/70 bg-[#0e0d0d] flex flex-col justify-center items-center gap-5 p-10 rounded-2xl relative ">
        <input
          type="text"
          name="user_name"
          required
          placeholder="Nombre"
          className="contactFormInput"
        />
        <input
          type="email"
          name="user_email"
          required
          placeholder="Email"
          className="contactFormInput"
        />
        <input
          type="text"
          name="user_company"
          required
          placeholder="Empresa (opcional)"
          className="contactFormInput"
        />
        <textarea
          name="message"
          required
          placeholder="Mensaje"
          className="contactFormInput h-40"
        ></textarea>
        <button
          type="submit"
          className="w-fit h-fit py-2 px-20 bg-gray-300/90 text-[#0e0d0d] rounded-full cursor-pointer aspec"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};
