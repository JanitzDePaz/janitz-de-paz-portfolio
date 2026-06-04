import { useEffect, useRef, useState } from "react";
import { ActionButton } from "../ui/ActionButton";
import { Subtitle } from "../ui/Subtitle";
import { Title } from "../ui/Title";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!captchaToken) return;
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("email enviado");
        formRef.current?.reset();
        window.turnstile?.reset();
        setCaptchaToken(null);
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      });
  };
  const captchaRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (window.turnstile && captchaRef.current) {
      window.turnstile.render(captchaRef.current, {
        sitekey: "0x4AAAAAADcxwS32dslkvbpo",
        theme: "dark",
        callback: (token: string) => setCaptchaToken(token),
      });
    }
  }, []);

  return (
    <section className="gap-5 p-5 lg:gap-20 flex-col lg:flex-row" id="Contacto">
      <div className="flex flex-col gap-3 lg:gap-5 p-2 w-3/4 lg:w-1/3">
        <Title>¿Hablamos?</Title>
        <Subtitle>Llevemos tus ideas al siguiente nivel</Subtitle>
        <p className="text-xs  lg:text-lg">
          Desarrollador Full-stack con foco en React y TypeScript. Me
          especializo en construir aplicaciones modernas, optimizadas y con un
          código limpio que garantice un crecimiento sostenible.
        </p>
        <hr />
        <div className="flex flex-wrap gap-5">
          <ActionButton
            href="https://linkedin.com/in/janitz-de-paz"
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

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="border border-gray-700/70 bg-[#0e0d0d] flex flex-col justify-center items-center gap-5 p-5 lg:p-10 rounded-2xl relative w-3/4 lg:w-1/3"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Nombre"
          className="contactFormInput"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="contactFormInput"
        />
        <input
          type="text"
          name="company"
          placeholder="Empresa (opcional)"
          className="contactFormInput"
        />
        <textarea
          name="message"
          required
          placeholder="Mensaje"
          className="contactFormInput h-20 xl:h-40"
        ></textarea>
        <div className="scale-50 lg:scale-100" ref={captchaRef}></div>

        <button
          type="submit"
          className="primaryButton"
          disabled={!captchaToken}
        >
          Enviar
        </button>
      </form>
    </section>
  );
};
